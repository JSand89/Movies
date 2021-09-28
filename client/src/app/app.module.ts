import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieFormComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
