import { Component } from '@angular/core';
import{ProductListComponent} from './products/product-list.component';
@Component({
    selector: 'pm-app',//this is the directive name that is used in the view to load that component
    template: `
    <div>
    <h1> {{pageTitle}}</h1>
        <pm-products></pm-products>
        </div>
    `
   
})
export class AppComponent { 
    pageTitle:string="Acme App";
}
