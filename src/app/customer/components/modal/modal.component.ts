import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MovieService } from 'src/app/service/movie.service';
import { ADD_MOVIE } from 'src/app/store/movies.action';
import { Store, select  } from '@ngrx/store';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  addForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _movieService: MovieService,
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
    // this._movieService.addMovie(this.addForm.value).subscribe(
    //   (res) => {
    //     alert('Data added successfully');
    //     this.addForm.reset();
    //   },
    //   (err) => {
    //     console.log('Something went wrong', err);
    //   }
    // );
  }
}
