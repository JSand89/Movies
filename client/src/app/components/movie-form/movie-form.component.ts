import { Component, HostBinding, OnInit } from '@angular/core';
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @HostBinding('class') calsses='row'

  movie:any={
      id:0,
      title:'',
      year: 0,
      time: 0,
      lang: '',
      relatedate:'string',
      country: 'string',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
