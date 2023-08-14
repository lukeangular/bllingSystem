import { Component } from '@angular/core';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss']
})
export class SelectedItemComponent {


  activeCategory: string = 'all'
  getMenuByCategory(type: string) {
    this.activeCategory = type;
  }
}
