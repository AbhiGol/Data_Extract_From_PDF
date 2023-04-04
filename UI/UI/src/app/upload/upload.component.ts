import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {


  constructor(private api : ApiService)
  {
  }

  file : any;

  getFile(event:any)
  {
    this.file = event.target.files[0];
  }
  submitData()
  {
    let formData = new FormData();
    formData.set("file",this.file);

    this.api.uploadFile(formData)
    .subscribe({
      next:(res)=>{
        alert("File upload successfully");

      },
      error:()=>{
        alert("Error while uploading file");
      }
    })
  }
}
