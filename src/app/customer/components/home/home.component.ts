import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { GET_MOVIE_LIST } from 'src/app/store/movies.action';
import { selectMovieList } from 'src/app/store/movies.selector';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  moviesList$ = this._store.pipe(select(selectMovieList))
  
  constructor(
    private _store: Store,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.getMovieListData();

    console.warn("moviesList$ ", this.moviesList$)
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
