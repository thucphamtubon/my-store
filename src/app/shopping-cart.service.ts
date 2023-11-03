import { Injectable } from '@angular/core';
import { Product, ProductShoppingCart } from "../types";

@Injectable({
	providedIn: 'root'
})
export class ShoppingCartService {
	storage = window.localStorage;
	productShoppingCartList: ProductShoppingCart[] = [];
	totalPrice: number = 0;

	constructor() {
		try {
			const productShoppingCartList = JSON.parse(this.storage.getItem('shopping-cart') || '[]') as ProductShoppingCart[]
			this.productShoppingCartList = productShoppingCartList;
			this.getTotalPrice();
		} catch (e) {
			this.productShoppingCartList = [];
		}
	}

	saveToLocalStore(): void {
		localStorage.setItem('shopping-cart', JSON.stringify(this.productShoppingCartList));
	}

	addProductToShoppingCart(product: Product, selectedQuantity: string): void {
		const findedIndex = this.productShoppingCartList.findIndex(data => data.id === product.id)

		if (findedIndex === -1) {
			this.productShoppingCartList.push({ ...product, quantity: selectedQuantity });
		} else {
			this.productShoppingCartList[findedIndex].quantity = selectedQuantity;
		}

		this.getTotalPrice();
		this.saveToLocalStore()
	}

	getTotalPrice(): void {
		this.totalPrice = this.productShoppingCartList.reduce((acc, data) => {
			return acc + (+data.quantity * data.price);
		}, 0)
	}

	clearShoppingCart(): void {
		this.productShoppingCartList = [];
		this.totalPrice = 0;
		this.storage.removeItem('shopping-cart');
	}

	deleteProductInShoppingCart(productId: number): void {
		const findedIndex = this.productShoppingCartList.findIndex(data => data.id === productId)

		this.productShoppingCartList.splice(findedIndex, 1)

		this.getTotalPrice();
		this.saveToLocalStore()
	}
}
