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

  constructor(
    private _fb: FormBuilder,
    private _foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.buildOrderFormBuilder();
    this.getFoodList();
    this.buildDiscountFormBuilder();
  }

  // get menu by category
  activeCategory: string = 'all'
  getMenuByCategory(type: string) {
    this.activeCategory = type;

    if(this.activeCategory=='all'){
      this.getFoodList();
    }else{
      this.curentPage = 1;
      this.getCategoryItem(this.activeCategory)
    }
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
    let getBody = {
      currentpage: this.curentPage,
      _limit: this.limit
    }
    this.isFoodDataLoading = true;
    this._foodService.getFood(getBody).subscribe((res) => {
      this.foodList = res.data
      this.total = res.count
      this.isFoodDataLoading = false;
    }, err => {
      this.isFoodDataLoading = false
    })
  }

  onPageChange(event: any) {
    this.curentPage = event;
    this.getFoodList();
  }


  // get by category
  getCategoryItem(type?:String){
    let getBody = {
      category: type,
    }
    this.isFoodDataLoading = true;
    this._foodService.getByCategory(getBody).subscribe((res)=>{
      this.foodList = res.data
      this.total = res.count
      this.isFoodDataLoading = false;
    }, err=>{
      this.isFoodDataLoading = false;
    })
  }


  onPageChangeCategory(event: any) {
    this.curentPage = event;
    this.getCategoryItem(this.activeCategory);
  }
}
