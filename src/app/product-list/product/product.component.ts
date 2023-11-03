import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../../types";
import { ShoppingCartService } from "../../shopping-cart.service";

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product: Product;

	selectedQuantity: string = "1";

	constructor(
		private shoppingCartService: ShoppingCartService,
	) {
		this.product = {
			description: "",
			id: 0,
			price: 0,
			productName: "",
			imageUrl: ""
		}
	}

	ngOnInit() {
	}

	addToCart(product: Product) {
		this.shoppingCartService.addProductToShoppingCart(product, this.selectedQuantity);

		alert(`${this.selectedQuantity} ${product.productName} has been added to your cart .`);
	}

	selectQuantity(quantity: string) {
		this.selectedQuantity = quantity
	};
}
