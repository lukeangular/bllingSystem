import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { FoodService } from "../service/food.service";
import {
    ADD_FOOD,
    ADD_FOOD_SUCCESS,
    GET_FOOD_LIST,
    GET_FOOD_LIST_SUCCESS
} from "./foods.action";
import { exhaustMap, map, catchError, concatMap } from "rxjs/operators";
import { Observable, of } from 'rxjs';
import { Action } from "@ngrx/store"; // Import the Action type

interface FoodItem {
    id: number;
    name: string;
    price: number;
    category: string;
}

@Injectable()
export class FoodsEffect {

    loadFoodList$ = createEffect((): Observable<Action> =>
        this._actions$.pipe(
            ofType(GET_FOOD_LIST),
            exhaustMap((data) =>
                this._foodService.getFood(data).pipe(
                    map(response => GET_FOOD_LIST_SUCCESS({ foods: response.data as FoodItem[] })), // Use 'foods' property
                    catchError(error => of(/* Handle error here */))
                )
            )
        )
    );
    addFood$ = createEffect((): Observable<Action> =>
        this._actions$.pipe(
            ofType(ADD_FOOD),
            concatMap((data) =>
                this._foodService.addFood(data).pipe(
                    map(response => ADD_FOOD_SUCCESS({ response })),
                    catchError(error => of(/* Handle error here */))
                )
            )
        )
    );


    constructor(
        private _foodService: FoodService,
        private _actions$: Actions
    ) { }
}