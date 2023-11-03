import { Component, OnInit } from '@angular/core';
import { Product } from "../../types";
import { ShoppingCartService } from "../shopping-cart.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	productId?: number;
	product: Product;
	selectedQuantity: string;

	constructor(
		private shoppingCartService: ShoppingCartService,
		private productService: ProductService,
		private route: ActivatedRoute,
	) {
		this.selectedQuantity = "1";

		this.product = {
			description: "",
			id: 0,
			price: 0,
			productName: "",
			imageUrl: ""
		}
	}

	ngOnInit(): void {
		this.productService.getProductList().subscribe(productList => {
			this.route.paramMap.subscribe((params) => {
				this.productId = Number(params.get('productId'))

				this.product = productList.find(data => data.id === this.productId) as Product
			})
		})
	}

	addToCart(product: Product) {
		this.shoppingCartService.addProductToShoppingCart(product, this.selectedQuantity);

		alert(`${this.selectedQuantity} ${product.productName} has been added to your cart .`);
	}

	selectQuantity(quantity: string) {
		this.selectedQuantity = quantity
	}
}
