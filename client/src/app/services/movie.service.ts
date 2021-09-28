import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_URI='http://localhost:4000/api'
  constructor( private http:HttpClient) { }

  getMovies(){
    return this.http.get(`${this.API_URI}/movies`);
  }

  getMovie(id:string){
    return this.http.get(`${this.API_URI}/movies/${id}`);
  }
  deleteMovie(id:string|number){
    return this.http.delete(`${this.API_URI}/movies/${id}`);
  }
  saveMovie(game:any){
    return this.http.post(`${this.API_URI}/movies/`,game)
  }
  updateGame(id:string|number,updateGame:any):Observable<any>{
    return this.http.post(`${this.API_URI}/movies/${id}`,updateGame)

  }

}
