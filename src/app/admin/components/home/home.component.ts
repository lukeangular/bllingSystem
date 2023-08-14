import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildOrderFormBuilder();
  }

  // login form builder
  orderForm: FormGroup;
  buildOrderFormBuilder() {
    this.orderForm = this._fb.group({
      status: ["", [Validators.required]],
    });
  }




  table_data = [
    { order_no: 1, name: 'Momo', quantity: 3, price: 130, discount_price: '', status: 'order' },
    { order_no: 2, name: 'Momo', quantity: 2, price: 130, discount_price: 30, status: 'placement' },
    { order_no: 3, name: 'Momo', quantity: 1, price: 130, discount_price: 30, status: 'order' },
    { order_no: 4, name: 'Momo', quantity: 5, price: 130, discount_price: 30, status: 'placement' },
    { order_no: 5, name: 'Momo', quantity: 7, price: 130, discount_price: 30, status: 'placement' },
    { order_no: 6, name: 'Momo', quantity: 9, price: 130, discount_price: 30, status: 'paid' },
    { order_no: 7, name: 'Momo', quantity: 4, price: 130, discount_price: 30, status: 'order' },
    { order_no: 8, name: 'Momo', quantity: 3, price: 130, discount_price: 30, status: 'paid' },
    { order_no: 9, name: 'Momo', quantity: 7, price: 130, discount_price: 30, status: 'order' },
    { order_no: 10, name: 'Momo', quantity: 7, price: 130, discount_price: 30, status: 'paid' },
  ];


  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  onSubmit(){

  }
}
