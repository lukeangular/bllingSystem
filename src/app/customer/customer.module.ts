import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    SelectedItemComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
