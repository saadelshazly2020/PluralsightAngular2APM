import { Component } from '@angular/core';
import{ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
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
