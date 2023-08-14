import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Food {
  name: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private _http: HttpClient
  ) { }


  //add food
  getFood() {
    let url = 'http://localhost:3000/foods'
    return this._http.get(url)
  }

  //add food
  addFood(body: Food) {
    let url = 'http://localhost:3000/foods'
    return this._http.post<Food>(url, body)
  }
}
