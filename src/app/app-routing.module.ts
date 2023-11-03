import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from "./product-list/product-list.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { OrderConfirmationComponent } from "./order-confirmation/order-confirmation.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const routes: Routes = [
	{ path: '', component: ProductListComponent },
	{ path: 'products/:productId', component: ProductDetailsComponent },
	{ path: 'shopping-cart', component: ShoppingCartComponent },
	{ path: 'order-confirmation/:fullname/:totalPrice', component: OrderConfirmationComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
