import { Injectable } from '@angular/core';
import {moviesArray} from "../sample-movies"
interface movint{
    id:number,
    title:string,
    poster:string,
    synopsis:string, 
    genres:Array<string>,
    year:number,
    director:string,
    actors:Array<string>,
    hours:Array<string>,
    room: number
}

@Injectable()
export class CinemaService {
   moviesArray:Array<movint> = moviesArray;

   getMovies(){
       return this.moviesArray
    }
    getMovie(id) {
        return this.moviesArray.filter(movie => movie.id == id[0])
    }
    constructor() {}
    
};
   