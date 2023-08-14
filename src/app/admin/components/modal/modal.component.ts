import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FoodService } from 'src/app/service/food.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  addForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _foodService: FoodService
  ) {
    this.buildFoodFormBuilder();
  }


  handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // Update the 'image' form control with the selected file
      this.addForm.patchValue({
        image: file
      });
      // Trigger a change detection so Angular updates the view
      this.addForm.get('image')?.updateValueAndValidity();
    }
  }


  //
  buildFoodFormBuilder() {
    this.addForm = this._fb.group({
      name: ["", [Validators.required]],
      price: ["", [Validators.required]],
      category: ["", [Validators.required]],
    });
  }



  //
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
