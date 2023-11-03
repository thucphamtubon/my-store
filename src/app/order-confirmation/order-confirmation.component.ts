import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-order-confirmation',
	templateUrl: './order-confirmation.component.html',
	styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
	fullName: string = "";
	totalPrice: string = "";

	constructor(
		private route: ActivatedRoute
	) {
	}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.fullName = params.get('fullname') || "";
			this.totalPrice = params.get('totalPrice') || "";
		})
	}
}
