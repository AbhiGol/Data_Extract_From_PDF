import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadComponent} from './upload/upload.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'template',component:TemplateComponent},
  {path:'upload',component:UploadComponent},
  //{path:'',redirectTo:'/template',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
