import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  addForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _movieService: MovieService
  ) {
    this.buildFoodFormBuilder();
  }


  // add food form builder
  buildFoodFormBuilder() {
    this.addForm = this._fb.group({
      name: ["", [Validators.required]],
      earning: ["", [Validators.required]],
      releaseDate: ["", [Validators.required]],
    });
  }


  // submit food data
  onSubmit() {
    if (this.addForm.invalid) return;
    const earningValue = parseFloat(this.addForm.value.earning);
    this.addForm.patchValue({
      earning: earningValue
    });
    this._movieService.addMovie(this.addForm.value).subscribe(
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
