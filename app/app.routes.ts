// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProductListComponent} from './products/product-list.component';
import { WelcomeComponent }  from './home/welcome.component';

export const routes: Routes = [
  { path: '/welcome', component: WelcomeComponent },
  { path: '/products', component: ProductListComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);