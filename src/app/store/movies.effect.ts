import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { tap, map, catchError, concatMap, switchMap, mergeMap } from "rxjs/operators";
import { of } from 'rxjs';
import { MovieService } from "../service/movie.service";
import {
    GET_MOVIE_LIST,
    GET_MOVIE_SUCCESS_LIST,
    ADD_MOVIE,
    ADD_MOVIE_SUCCESS
} from "./movies.action";
import { Movie } from "./movies";

@Injectable()
export class MoviesEffect {

    constructor(
        private _movieService: MovieService,
        private _actions$: Actions
    ) { }
    loadMovieList$ = createEffect(() =>
        this._actions$.pipe(
            ofType(GET_MOVIE_LIST),
            mergeMap(() =>
                this._movieService.getMovie().pipe(
                    map((movies) => GET_MOVIE_SUCCESS_LIST({ movies })),
                    catchError(error => of(/* Handle error action here */))
                )
            )
        )
    )

    addMovie$ = createEffect(() =>
        this._actions$.pipe(
            ofType(ADD_MOVIE),
            concatMap(({ movie }) =>
                this._movieService.addMovie(movie).pipe(
                    map(newMovie => ADD_MOVIE_SUCCESS(newMovie)),
                    catchError(error => of(/* Handle error action here */))
                )
            )
        )
    );
}
