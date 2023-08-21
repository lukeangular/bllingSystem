import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ADD_MOVIE } from 'src/app/store/movies.action';
import { Store  } from '@ngrx/store';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  addForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _store: Store,
  ) {
    this.buildFoodFormBuilder();
  }

  // add food form builder
  buildFoodFormBuilder() {
    this.addForm = this._fb.group({
      name: ["", [Validators.required]],
      earning: ["", [Validators.required]],
      releaseDate: ["", [Validators.required]],
      username:["sundar"] // for advance selector
    });
  }

  // submit food data
  onSubmit() {
    if (this.addForm.invalid) return;
    const earningValue = parseFloat(this.addForm.value.earning);
    this.addForm.patchValue({
      earning: earningValue
    });
    this._store.dispatch(ADD_MOVIE(this.addForm.value))
    alert('Data added successfully');
    this.addForm.reset();
  }
}
