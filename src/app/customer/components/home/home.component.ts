import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GET_MOVIE_LIST } from 'src/app/store/movies.action';
import { MoviesSelector, selectGreater, userMoviesSelector } from 'src/app/store/movies.selector';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import { MoviesState } from 'src/app/store/movies.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // moviesList$ = this._store.pipe(select(MoviesSelector))
  // moviesList$ = this._store.pipe(select(userMoviesSelector))
  moviesList$ = this._store.pipe(select(selectGreater(500)))

  
  constructor(
    private _store: Store<MoviesState>,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.getMovieListData();
  }
  
  // movie list
  isMovieDataLoading: boolean = false;
  getMovieListData() {
    this.isMovieDataLoading = true;
    // dispatch method 
    this._store.dispatch(GET_MOVIE_LIST())
    this.isMovieDataLoading = false;
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

}
