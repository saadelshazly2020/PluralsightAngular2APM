import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { routing } from './app.routes';
import { WelcomeComponent }  from './home/welcome.component';
import { ProductDetailsComponent }  from './products/product-details.component';

@NgModule({
  imports: [ BrowserModule ,FormsModule,HttpModule,RouterModule,routing],
  declarations: [ AppComponent,ProductListComponent,ProductFilterPipe,StarComponent, WelcomeComponent,ProductDetailsComponent],
  bootstrap: [ AppComponent ]
})
// @RouteConfig({
  
// })
export class AppModule { }
