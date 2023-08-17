import { createSelector, createFeatureSelector } from "@ngrx/store";
import { MoviesState } from './movies.reducer';

const selectFoodsFeature = createFeatureSelector<MoviesState>('movies');

export const selectMovieList = createSelector(
    selectFoodsFeature,
    state => state.movies
);

// import { createSelector, createFeatureSelector } from "@ngrx/store";
// import { MoviesState } from './movies.reducer';
// import { Movie } from "./movies";


// export const MovieSelector = createSelector(
//     (state : MoviesState) => state.movies,
//     (movies: ReadonlyArray<Movie>) => movies
// );