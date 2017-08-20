"use strict";
// ====== ./app/app.routes.ts ======
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var product_list_component_1 = require("./products/product-list.component");
var welcome_component_1 = require("./home/welcome.component");
exports.routes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'products', component: product_list_component_1.ProductListComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map