import { Component, HostBinding, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service'

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @HostBinding('class') calsses='row'

  movie:any={
    mov_id:0,
    mov_title:'',
    mov_year: 0,
    mov_time: 0,
    mov_lang: '',
    mov_dt_rel:new Date,
    mov_rel_country: 'US',
  }

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
  }
saveNewMovie(){
delete this.movie.mov_id;
delete this.movie.mov_dt_rel;
console.log(this.movie)
this.movieService.saveMovie(this.movie)
.subscribe(
  res=>{ 
    console.log(res)
  },
  err=>console.error(err)
)
}
}
