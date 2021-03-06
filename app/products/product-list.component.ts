import {Component,OnInit} from '@angular/core';
import { ProductService } from './product.service';
import{IProduct} from './product'
@Component({
    selector:'pm-products',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit{
    showImage:boolean=true;
    listFilter:string="";
    btnText:string ="ShowImage";
    pageTitle:string="Product List";
    products:IProduct[];
    errorMessage:string;
    //inject ProductService Class intproduct list class by using constructor
    //this is the dependency injection in angular 2 or in type script
    constructor(private _productService:ProductService){

    }
toggleImage():void{
    this.showImage=!this.showImage;
    if(this.showImage){
        this.btnText="HideImage"
    }
    else
        this.btnText="showImage";
    };
ngOnInit():void{
this._productService.getProducts()
.subscribe(products=>this.products=products,
error=>this.errorMessage=<any>error);
}
onRatingClicked(message:string):void{

    this.pageTitle=this.pageTitle+message;
}

}