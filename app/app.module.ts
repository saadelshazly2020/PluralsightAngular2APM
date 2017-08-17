import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
// import { RouteConfig} from '@angular/router';


@NgModule({
  imports: [ BrowserModule ,FormsModule,HttpModule,RouterModule],
  declarations: [ AppComponent,ProductListComponent,ProductFilterPipe,StarComponent ],
  bootstrap: [ AppComponent ]
})
// @RouteConfig({
  
// })
export class AppModule { }
