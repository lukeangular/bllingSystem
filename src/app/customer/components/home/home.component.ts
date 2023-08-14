import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private _foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.getFoodList();
  }

  // food list
  foodList: any = [];
  p: number = 1;
  item: number = 16;
  total: any;

  isFoodDataLoading: boolean = false;
  getFoodList() {
    this.isFoodDataLoading = true;
    this._foodService.getFood().subscribe((res) => {
      this.foodList = res
      this.isFoodDataLoading = false;
    }, err => {
      this.isFoodDataLoading = false
    })
  }
}
