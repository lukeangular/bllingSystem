import { createSelector, createFeatureSelector } from "@ngrx/store";
import { FoodsState } from './foods.reducer';

const selectFoodsFeature = createFeatureSelector<FoodsState>('foods');

export const selectFoodList = createSelector(
    selectFoodsFeature,
    state => state.data
);