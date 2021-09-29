import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {MovieFormComponent} from './components/movie-form/movie-form.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/movies',
    pathMatch:'full'
  },{
    path:'movies',
    component: MovieListComponent
  },
  {
    path:'movies/add',
    component: MovieFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
