import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'category',
    component: CategoryComponent
  },
  {
    path:'selected-item',
    component: SelectedItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
