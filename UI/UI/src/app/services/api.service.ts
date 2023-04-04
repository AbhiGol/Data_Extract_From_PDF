import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getTemplate()
  {
    return this.http.get<any>("http://127.0.0.1:8000/template_all");
  }
  postTemplate(data : any){
    return this.http.post("http://127.0.0.1:8000/createtamplate",data);
  }
  deleteTemplate(_id:string)
  {
    return this.http.delete("http://127.0.0.1:8000/delete/"+_id);
  }
  getOneTemplate(name:string)
  {
    return this.http.get("http://127.0.0.1:8000/get/"+name);
  }
  uploadFile(formData:any)
  {
    return this.http.post("http://127.0.0.1:8000/upload/",formData);
  }
}

