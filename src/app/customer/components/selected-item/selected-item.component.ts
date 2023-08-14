import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    public dialog: MatDialog,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildOrderFormBuilder();
  }

  openDialog() {
    this.dialog.open(ModalComponent);
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
  submitDiscount(){
    
  }


  // close modal
  closeModal() {
    const modal = document.getElementById('closeModal');
    if (modal) {
      modal.click();
    }
  }

}
