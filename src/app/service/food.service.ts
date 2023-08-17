import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

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
  getFood(body:any) {
    let url = `http://localhost:3000/foods?_page=${body.data.currentpage}&_limit=${body.data._limit}`
    let url_count = 'http://localhost:3000/foods?_size'
    // return this._http.get(url)
    return forkJoin([
      this._http.get(url),
      this._http.get(url_count)
    ]).pipe(
      map(([data, count]) => ({
        data,
        count: Object.keys(count).length
      }))
    );
  }
  

  //add food
  addFood(body: Food) {
    let url = 'http://localhost:3000/foods'
    return this._http.post<Food>(url, body)
  }


  // get by category
  getByCategory(body:any){
    let url = `http://localhost:3000/foods?category=${body.category}`
    return forkJoin([
      this._http.get(url)
    ]).pipe(
      map(([data]) => ({
        data,
        count: Object.keys(data).length
      }))
    );
  }
}
