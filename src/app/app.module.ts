import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
// state
import { StoreModule } from '@ngrx/store';
import { FoodsReducer } from './store/foods.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FoodsEffect } from './store/foods.effect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    HttpClientModule,
    StoreModule.forFeature('myfoods', FoodsReducer),
    EffectsModule.forFeature([FoodsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
