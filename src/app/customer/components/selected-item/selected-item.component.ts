import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss']
})
export class SelectedItemComponent implements OnInit {


  activeCategory: string = 'all'
  getMenuByCategory(type: string) {
    this.activeCategory = type;


  }

  constructor(
    private _fb: FormBuilder,
    private _foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.buildOrderFormBuilder();
    this.getFoodList();
  }


  // login form builder
  orderForm: FormGroup;
  buildOrderFormBuilder() {
    this.orderForm = this._fb.group({
      full_name: ["", [Validators.required]],
      address: ["", [Validators.required]],
      phone_number: ["", [Validators.required]],
    });
  }

  // discount form
  discountForm: FormGroup;
  buildDiscountFormBuilder() {
    this.orderForm = this._fb.group({
      discount_amount: ["",],
      discount_percentage: ["",],
    });
  }


  onSubmit() {

  }

  // submit discount
  submitDiscount() {

  }


  // close modal
  closeModal() {
    const modal = document.getElementById('closeModal');
    if (modal) {
      modal.click();
    }
  }


  // food list
  foodList: any = [];
  curentPage: number = 1;
  limit: number = 9;
  total: any;
  isFoodDataLoading: boolean = false;

  getFoodList() {
    this.isFoodDataLoading = true;
    let getBody = {
      currentpage: this.curentPage,
      _limit: this.limit
    }
    this._foodService.getFood(getBody).subscribe((response) => {
      this.foodList = response.data
      this.total = response.count
      this.isFoodDataLoading = false;
      console.warn("RESPSE IS => ", response)
    }, err => {
      this.isFoodDataLoading = false
    })
  }

  onPageChange(event: any) {
    this.curentPage = event;
    this.getFoodList();
  }
}
