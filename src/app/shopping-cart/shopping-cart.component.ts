import { Component, Input, OnInit } from '@angular/core';
import { ProductShoppingCart } from "../../types";
import { ShoppingCartService } from "../shopping-cart.service";

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
	productShoppingCartList: ProductShoppingCart[] = []
	totalPrice: number = 0;
	amount: string = "Amount";

	constructor(
		private shoppingCartService: ShoppingCartService
	) {
	}

	ngOnInit() {
		this.productShoppingCartList = this.shoppingCartService.productShoppingCartList;
		this.totalPrice = this.shoppingCartService.totalPrice;
	}

	onSelectQuantity(quantity: string, productShoppingCart: ProductShoppingCart): void {
		this.shoppingCartService.addProductToShoppingCart(productShoppingCart, quantity);
		this.totalPrice = this.shoppingCartService.totalPrice;
	};

	deleteProductInCart(productId: number) {
		this.shoppingCartService.deleteProductInShoppingCart(productId);
		this.totalPrice = this.shoppingCartService.totalPrice;
	}
}
