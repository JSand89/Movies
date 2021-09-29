import { Component, HostBinding, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service'
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:any=[]
  constructor( private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      res=> {
        console.log(res)
        this.movies=res;
        console.log(this.movies,'movies')
      },
      err=> console.log(err)

    )
  }

  deleteMovie(id:number){
    this.movieService.deleteMovie(id).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
    console.log(id)
  }
}
