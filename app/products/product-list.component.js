"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    //inject ProductService Class intproduct list class by using constructor
    //this is the dependency injection in angular 2 or in type script
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.showImage = false;
        this.listFilter = "";
        this.btnText = "ShowImage";
        this.pageTitle = "Product List";
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
        if (this.showImage) {
            this.btnText = "HideImage";
        }
        else
            this.btnText = "showImage";
    };
    ;
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this._productService.getProducts();
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = this.pageTitle + message;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        templateUrl: 'app/products/product-list.component.html',
        styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map