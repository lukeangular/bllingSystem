import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    SelectedItemComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
    MatIconModule
  ]
})
export class CustomerModule { }
