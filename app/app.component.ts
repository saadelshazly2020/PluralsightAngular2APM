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
        <nav calss="navbar vavbar-default">
        <h1 class="navbar-barnd" style="text-align:center">{{pageTitle}}</h1>
              <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['welcome']" >Home</a> </li>
                        <li><a [routerLink]="['products']" >Product List</a></li>
                    </ul>
               </div>
        </nav>
        <div class="container">
        <router-outlet></router-outlet>
        </div>
    </div>
    `,
    providers:[ProductService,HttpModule]
   
})
export class AppComponent { 
    pageTitle:string="Acme product managment";
}
