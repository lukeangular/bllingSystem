import { createSelector } from "@ngrx/store";
import { MoviesState } from './movies.reducer';
import { Movie } from "./movies";

export const MoviesSelector = createSelector(
    (state: MoviesState) => state.movies,
    (movies: ReadonlyArray<Movie>) => movies
)

// for advance selector (movie with sundar username)
export const userMoviesSelector = createSelector(
    (state: MoviesState) => state.movies,
    (state: MoviesState) => state.user,
    (movies: ReadonlyArray<Movie>, user: ReadonlyArray<string>) => {
        return movies.filter((movie: Movie) => movie.username === 'sundar')
    }
)

// it sill relase holding data
userMoviesSelector.release();

// select data base on your property (parameter) pass from component 
export const selectGreater = (earning: number) => createSelector(
    MoviesSelector, (movies) => {
        return movies.filter((movie: Movie) => movie.earning > earning)
    }
)
