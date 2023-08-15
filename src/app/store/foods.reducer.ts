
import { createReducer } from "@ngrx/store";
import { Foods } from "./foods";

export const initialState: ReadonlyArray<Foods> = [];

export const FoodsReducer = createReducer(
    initialState
);