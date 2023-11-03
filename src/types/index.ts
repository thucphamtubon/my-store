export type Product = {
	id: number;
	productName: string;
	price: number;
	description: string;
	imageUrl: string;
}

export type ProductShoppingCart = { quantity: string } & Product
