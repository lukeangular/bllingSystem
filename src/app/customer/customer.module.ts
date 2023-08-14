import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';


import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    SelectedItemComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule
  ]
})
export class CustomerModule { }
