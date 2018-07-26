import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'services/CinemaService';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  moviesArray: Array<object>=[]
  constructor(public cinemaService: CinemaService) {
    this.moviesArray = this.cinemaService.getMovies()
  }

  ngOnInit() {
  }

}
