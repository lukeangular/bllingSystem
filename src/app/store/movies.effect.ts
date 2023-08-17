import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import {
    GET_MOVIE_LIST,
    GET_MOVIE_LIST_SUCCESS,
    ADD_MOVIE,
    ADD_MOVIE_SUCCESS
} from "./movies.action";
import { exhaustMap, map, catchError, concatMap } from "rxjs/operators";
import { EmptyError, Observable, of } from 'rxjs';
import { MovieService } from "../service/movie.service";
import { Movie } from "./movies";


@Injectable()
export class MoviesEffect {


    constructor(
        private _movieService: MovieService,
        private _actions$: Actions) { }

    // load data
    loadMovie$ = createEffect(() =>
        this._actions$.pipe(
            ofType(GET_MOVIE_LIST),
            exhaustMap(() =>
                this._movieService.getMovie().pipe(
                    map((response) => GET_MOVIE_LIST_SUCCESS({ movies: response as Movie[] }))
                )
            )
        )
    );

    // add data
    addMovie$ = createEffect(() =>
        this._actions$.pipe(
            ofType(ADD_MOVIE),
            concatMap((newMovie) =>
                this._movieService.addMovie(newMovie).pipe(
                    map((movies) => ADD_MOVIE_SUCCESS({ movies }))
                )
            )
        )
    );
}