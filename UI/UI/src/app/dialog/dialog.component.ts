import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from './../services/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{

  templateForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,
    private api : ApiService,
    //private home : HomeComponent,
    //@Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>

    ) { }
    ngOnInit(): void {
      this.templateForm = this.formBuilder.group({
        name: ['',Validators.required],
        description: ['',Validators.required],
        created_date: ['',Validators.required],
      });
      console.log('pilla los datos:');
      //console.log(this.editData);
      //if (this.editData){
       // this.templateForm.controls['Name'].setValue(this.editData.Name);
      //}
    }

  addProduct(){
    console.log('añadir producto');
    console.log(this.templateForm.value);
    if(this.templateForm.valid){
      this.api.postTemplate(this.templateForm.value)
      .subscribe({ //observador
        next:(res)=>{
          alert("Tamplate Create Successfully");
          this.templateForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the tamplate");
        }
      })
    }
  }
}

