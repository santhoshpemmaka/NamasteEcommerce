import {v4 as uuid} from "uuid";
import {
	product7,
	product8,
	product9,
	product10,
	product11,
	product12,
	product13,
	product14,
	product15,
} from "../../Assests";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		name: "SOLOGNAC",
		description: "T-shirts Femme Steppe",
		actualcost: 599,
		discountcost: 399,
		discountOffer: "30%",
		rating: 4,
		totalrating: 24,
		brand: "Domyos",
		categoryName: "shirts",
		stock: true,
		quantity: 10,
		newstock: true,
		imageUrl: product7,
	},

	{
		_id: uuid(),
		name: "PUMA",
		description: "Men's Warm and Waterproff Boots ",
		actualcost: 1200,
		discountcost: 999,
		discountOffer: "30%",
		rating: 4.5,
		totalrating: 20,
		brand: "Quechua",
		categoryName: "shoes",
		stock: true,
		quantity: 10,
		newstock: true,
		imageUrl: product8,
	},
	{
		_id: uuid(),
		name: "INESIS",
		description: "T-shirts Gofo Polo shrit",
		actualcost: 599,
		discountcost: 499,
		discountOffer: "20%",
		rating: 4,
		totalrating: 25,
		brand: "Artengo",
		categoryName: "shirts",
		stock: false,
		quantity: 10,
		newstock: true,
		imageUrl: product9,
	},
	{
		_id: uuid(),
		name: "ADDIAS",
		description: "RUN CUSHION MEN'S RUNNING SHOES ",
		actualcost: 1400,
		discountcost: 1999,
		discountOffer: "30%",
		rating: 4.5,
		totalrating: 40,
		brand: "Kalenji",
		categoryName: "shoes",
		stock: true,
		quantity: 10,
		newstock: false,
		imageUrl: product10,
	},

	{
		_id: uuid(),
		name: "ARTENGO",
		description: "MH160 hiking sunglasses",
		actualcost: 600,
		discountcost: 499,
		discountOffer: "20%",
		rating: 4.5,
		totalrating: 10,
		brand: "Artengo",
		categoryName: "sunglasses",
		stock: true,
		quantity: 10,
		newstock: true,
		imageUrl: product11,
	},
	{
		_id: uuid(),
		name: "FORCLAZ",
		description: "Travel Trekking Cargo Trousers",
		actualcost: 1000,
		discountcost: 799,
		discountOffer: "20%",
		rating: 4.5,
		totalrating: 50,
		brand: "Domyos",
		categoryName: "trousers",
		stock: false,
		quantity: 10,
		newstock: false,
		imageUrl: product12,
	},
	{
		_id: uuid(),
		name: "QUECHUA",
		description: "Hiking Backpack 20 L",
		actualcost: 1000,
		discountcost: 899,
		discountOffer: "20%",
		rating: 4.5,
		totalrating: 15,
		brand: "Quechua",
		categoryName: "backpack",
		stock: true,
		quantity: 10,
		newstock: false,
		imageUrl: product13,
	},
	{
		_id: uuid(),
		name: "Artengo",
		description: "Travel  Backpack 60 L",
		actualcost: 3000,
		discountcost: 2899,
		discountOffer: "20%",
		rating: 4.5,
		totalrating: 25,
		brand: "Artengo",
		categoryName: "backpack",
		stock: true,
		quantity: 10,
		newstock: false,
		imageUrl: product14,
	},
	{
		_id: uuid(),
		name: "QUECHUA",
		description: "Adult hiking sunglasses",
		actualcost: 400,
		discountcost: 299,
		discountOffer: "20%",
		rating: 4.5,
		totalrating: 12,
		brand: "Kalenji",
		categoryName: "sunglasses",
		stock: true,
		quantity: 10,
		newstock: true,
		imageUrl: product15,
	},
];
