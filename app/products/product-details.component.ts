import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector:'pm-products',
    templateUrl:'app/products/product-details.component.html',
    styleUrls:['app/products/product-details.component.css']
})

export class ProductDetailsComponent{
pageTitle:string="Product Details";
constructor(private _route:ActivatedRoute){
    
    this.pageTitle +=" "+ _route.snapshot.params['id']
//       _route.queryParams.subscribe(params=>{

// this.id =+params["page"]||0;
//       });
   



}
}