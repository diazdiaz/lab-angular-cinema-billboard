import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'services/CinemaService'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  id: number;
  movie: any;
  constructor(public cinemaService:CinemaService, public router: ActivatedRoute) {
    this.router.params.subscribe((p)=>this.id = Number(p.id))
    this.movie = this.cinemaService.getMovie(this.id)
   }

  ngOnInit() {
  }

}
