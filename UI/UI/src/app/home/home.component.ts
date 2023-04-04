import {ApiService} from './../services/api.service';
import { Component, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import { DialogComponent} from './../dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'description', 'created_date', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output() parentFunction: EventEmitter<any> = new EventEmitter<any>()

  constructor (
    private dialog : MatDialog,
    private api : ApiService
  ){
  }



  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.api.getTemplate()
    .subscribe({ //observador
      next:(res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Se ha producido un error al recuparar los datos!!")
      }
    })
  }

  getone(name:string)
  {
    this.api.getOneTemplate(name)
    .subscribe({ //observador
      next:(res)=>{
        //console.log(res);
        this.dataSource = new MatTableDataSource();
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
        this.parentFunction.emit("hiii");

      },
      error:(err)=>{
        alert("Se ha producido un error al recuparar los datos!!")
      }
    })
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

  deleteTemplate(_id:string)
  {
    this.api.deleteTemplate(_id)
    .subscribe({
      next:(res)=>{
        alert("Template Deleted ");
        this.getAllProducts();
      },
      error:()=>{
        alert("Error while deleting template")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
