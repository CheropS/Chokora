import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainFormComponent } from './main-form/main-form.component';

const routes: Routes = [
  { path: 'about', component:AboutComponent},
  { path: 'main-form', component:MainFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
