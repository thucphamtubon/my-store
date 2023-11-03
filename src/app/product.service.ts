import { Injectable } from '@angular/core';
import { Product } from "../types";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
		private http: HttpClient
  ) { }

	getProductList(): Observable<Product[]> {
		return this.http.get<Product[]>('http://localhost:4200/assets/data.json');
	}

}
