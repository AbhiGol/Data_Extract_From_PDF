import { Dialog1Component } from './../dialog1/dialog1.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ApiService} from './../services/api.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit{

  displayedColumns: string[] = [ 'name', 'description', 'action'];
  //@Output() callParentFunction: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private api : ApiService,
    private dialog : MatDialog,

  ){
  }

  ngOnInit() {

  }

  getOneTemplate1()
  {
    this.api.getTemplate()
    .subscribe({
      next:(res)=>{
        alert("Template Deleted ");
        //this.getAllProducts();
      },
      error:()=>{
        alert("Error while deleting template")
      }
    })
  }

  parentFunction(data:any)
  {
    console.log(data);
  }

}
