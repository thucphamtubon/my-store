import { Component, OnInit } from '@angular/core';
import { Product } from "../../types";
import { ProductService } from "../product.service";

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
	productList: Product[] = [];

	constructor(
		private productService: ProductService
	) {
	}

	ngOnInit() {
		this.productService.getProductList().subscribe((productList) => {
			this.productList = productList
		})
	}
}
