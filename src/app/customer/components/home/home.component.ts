import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Store } from '@ngrx/store';
import { getFoodList, addFood } from 'src/app/store/foods.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _foodService: FoodService,
    private _store: Store
  ) { }

  ngOnInit(): void {
    this.getFoodList();
  }

  // food list
  foodList: any = [];
  curentPage: number = 1;
  limit: number = 16;
  total: any;

  isFoodDataLoading: boolean = false;
  getFoodList() {
    // this.isFoodDataLoading = true;
    let getBody = {
      currentpage: this.curentPage,
      _limit: this.limit
    }
    // dispatch method 
    this._store.dispatch(getFoodList(getBody))

    this._foodService.getFood(getBody).subscribe((response) => {
      this.foodList = response.data
      this.total = response.count
      this.isFoodDataLoading = false;
    }, err => {
      this.isFoodDataLoading = false
    })
  }

  onPageChange(event: any) {
    this.curentPage = event;
    this.getFoodList();
  }


  // add to card 
  addToCard(data:any) {
    console.warn("Add to card ", data)
    this._store.dispatch(addFood(data))
  }

}
