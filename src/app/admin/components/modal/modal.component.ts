import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FoodService } from 'src/app/service/food.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  addForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _foodService: FoodService
  ) {
    this.buildFoodFormBuilder();
  }


  // add food form builder
  buildFoodFormBuilder() {
    this.addForm = this._fb.group({
      name: ["", [Validators.required]],
      price: ["", [Validators.required]],
      category: ["", [Validators.required]],
    });
  }


  // submit food data
  onSubmit() {
    if (this.addForm.invalid) return;
    // Convert the price field value to a number
    const priceValue = parseFloat(this.addForm.value.price);
    // Update the form value with the converted price
    this.addForm.patchValue({
      price: priceValue
    });
    this._foodService.addFood(this.addForm.value).subscribe(
      (res) => {
        alert('Data added successfully');
        this.addForm.reset();
      },
      (err) => {
        console.log('Something went wrong', err);
      }
    );
  }


}
