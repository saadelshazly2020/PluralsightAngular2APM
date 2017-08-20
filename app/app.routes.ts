// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProductListComponent} from './products/product-list.component';
import { WelcomeComponent }  from './home/welcome.component';
import { ProductDetailsComponent }  from './products/product-details.component';
export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent }
  

];



export const routing: ModuleWithProviders = RouterModule.forRoot(routes);