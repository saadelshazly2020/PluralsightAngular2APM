import { Component } from '@angular/core';
import{ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import {RouterModule,Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { WelcomeComponent }  from './home/welcome.component';


@Component({
    selector: 'pm-app',//this is the directive name that is used in the view to load that component
    template: `
    <div>
    <h1> {{pageTitle}}</h1>
        <pm-products></pm-products>
        </div>
    `,
    providers:[ProductService,HttpModule]
   
})
export class AppComponent { 
    pageTitle:string="Acme App";
}
export const routes: Routes = [
  { path: '/welcome', component: WelcomeComponent },
  { path: '/products', component: ProductListComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);