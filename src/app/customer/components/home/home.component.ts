import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { GET_MOVIE_LIST, ADD_MOVIE } from 'src/app/store/movies.action';
import { selectFoodList } from 'src/app/store/movies.selector';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesList$ = this._store.select(selectFoodList);
  
  constructor(
    private _store: Store,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.getMovieListData();
  }

  
  // movie list
  moviesList: any = []
  isMovieDataLoading: boolean = false;
  getMovieListData() {
    this.isMovieDataLoading = true;
    // dispatch method 
    this._store.dispatch(GET_MOVIE_LIST())
    this.isMovieDataLoading = false;
  }


  // add to card 
  addToCard(data:any) {
    this._store.dispatch(ADD_MOVIE(data))
  }


  openDialog() {
    this.dialog.open(ModalComponent);
  }

}
