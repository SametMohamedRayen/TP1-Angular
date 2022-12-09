import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./components/first/first.component";
import {SecondComponent} from "./components/second/second.component";
import {CvComponent} from "./CVs/cv/cv.component";
import {UserDetailComponent} from "./CVs/user-detail/user-detail.component";
import {AuthComponent} from "./CVs/auth/auth.component";
import {AddCvComponent} from "./CVs/add-cv/add-cv.component";
import {ImageLoopComponent} from "./components/image-loop/image-loop.component";

const routes: Routes = [
  {path:'first', component: FirstComponent},
  {path:'second', component: SecondComponent},
  {path:'CV', component: CvComponent},
  { path: 'CV' ,children:[
      { path: '', component: CvComponent },
      { path:'addcv', component:AddCvComponent },
      { path: ':id', component: UserDetailComponent },
    ]},
  { path: 'auth', component: AuthComponent },
  { path: 'imageloop', component: ImageLoopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
