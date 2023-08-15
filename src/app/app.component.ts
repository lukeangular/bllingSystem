import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'resturantBilling';

  constructor(
    private _router: Router
  ) { }


  currentUrl: string = ''
  isAdmin: boolean = false;
  ngOnInit(): void {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/selected-item':
            this.currentUrl = event.url
            this.activeCategory = 'selecteditem'
            break;

          case '/admin':
            this.currentUrl = event.url
            this.isAdmin = true;
            this.activeCategory ='admin'
            break;

          default:
            break;
        }
      }
    });
  }


  // get menu type when user click at menu
  activeCategory: string = 'menulist'
  getMenuByCategory(type: string) {
    this.activeCategory = type;
  }
}
