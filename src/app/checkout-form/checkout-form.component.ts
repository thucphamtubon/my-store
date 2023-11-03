import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ShoppingCartService } from "../shopping-cart.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: 'app-checkout-form',
	templateUrl: './checkout-form.component.html',
	styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
	checkoutForm!: FormGroup;

	constructor(
		private router: Router,
		private shoppingCartService: ShoppingCartService,
		private formBuilder: FormBuilder
	) {
	}

	ngOnInit() {
		this.checkoutForm = this.formBuilder.group({
			fullName: ['', [
				Validators.required,
				Validators.minLength(3)
			]],
			address: ['', [
				Validators.required,
				Validators.minLength(6)
			]],
			creditCardNumber: ['', [
				Validators.required,
				Validators.maxLength(16),
				Validators.pattern('[0-9]*')
			]],
		});
	}

	onSubmit(): void {
		const { fullName } = this.checkoutForm.value
		this.router.navigate([`/order-confirmation/${fullName}/${this.shoppingCartService.totalPrice}`])
		this.shoppingCartService.clearShoppingCart();
	}

	get fullName() {
		return this.checkoutForm.get('fullName')
	}

	get address() {
		return this.checkoutForm.get('address')
	}

	get creditCardNumber() {
		return this.checkoutForm.get('creditCardNumber')
	}
}
