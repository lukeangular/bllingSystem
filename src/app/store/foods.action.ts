import { createAction, props } from "@ngrx/store";

export const getFoodList = createAction(
    '[Food] get food list',
    (data : any )=> data
)
export const getFoodListSuccess = createAction(
    '[Food] get food list success',
    (data : any )=> data
)
export const addFood = createAction(
    '[Food] add food',
    (data : any )=> data
)
export const addFoodSuccess = createAction(
    '[Food] add food success',
    (data : any )=> data
)
