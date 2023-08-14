import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resturantBilling';

  activeCategory: string = 'menulist'
  getMenuByCategory(type: string) {
    this.activeCategory = type;
  }
}
