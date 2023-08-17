import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Store, select  } from '@ngrx/store';
import { GET_FOOD_LIST, ADD_FOOD } from 'src/app/store/foods.action';
import { selectFoodList } from 'src/app/store/foods.selector';

interface FoodResponse {
  count: number;
  data: any[]; 
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foodsList$ = this._store.select(selectFoodList);

  
  constructor(
    private _foodService: FoodService,
    private _store: Store
  ) { }
  ngOnInit(): void {
    this.getFoodListData();

    this.foodsList$.subscribe((foods)=>{
      console.warn("data get => ",foods)
    });
  }

  // food list
  foodList: any = [];
  curentPage: number = 1;
  limit: number = 16;
  total: any;

  isFoodDataLoading: boolean = false;
  getFoodListData() {
    this.isFoodDataLoading = true;
    let getBody = {
      currentpage: this.curentPage,
      _limit: this.limit
    }
    // dispatch method 
    this._store.dispatch(GET_FOOD_LIST({ data: getBody }))
    this.isFoodDataLoading = false;
  }

  onPageChange(event: any) {
    this.curentPage = event;
    this.getFoodListData();
  }


  // add to card 
  addToCard(data:any) {
    this._store.dispatch(ADD_FOOD(data))
  }

}
