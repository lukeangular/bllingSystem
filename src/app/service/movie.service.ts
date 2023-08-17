import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../store/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private _http: HttpClient
  ) { }


  //get moie list
  getMovie() {
    let url = `http://localhost:3000/movie`
    return this._http.get(url)
  }

  //add or update movie
  addMovie(body: Movie) {
    let url = 'http://localhost:3000/movie'
    return this._http.post<Movie>(url, body)
  }
}
