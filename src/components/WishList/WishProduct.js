import uuid from "react-uuid";
const wishlistproducts = [
	{
		id: uuid(),
		name: "SOLOGNAC",
		description: "T-shirts Femme Steppe",
		actualcost: 599,
		discountcost: 399,
		discountOffer: "30%",
		rating: 4,
		totalrating: 24,
		brand: "Domyos",
		category: "shrits",
		stock: true,
		quantity: 10,
		newstock: true,
		imageUrl:
			"https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1991525%2Fk%24cfc166001d2362dbc0650edbab25b8cc%2Ft-shirts-femme-steppe-100-new-wood.jpg%3F%26f%3D250x250&w=384&q=75",
	},

	{
		id: uuid(),
		name: "PUMA",
		description: "Men's Warm and Waterproff Boots ",
		actualcost: 1200,
		discountcost: 999,
		discountOffer: "30%",
		rating: 4.5,
		totalrating: 20,
		brand: "Quechua",
		category: "shoes",
		stock: true,
		quantity: 10,
		newstock: true,
		imageUrl:
			"https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1647816%2Fk%242479e9814c12758f5184356b0913cb33%2Fmens-warm-and-waterproof-hiking-boots-sh100-ultra-warm.jpg%3F%26f%3D250x250&w=384&q=75",
	},
	{
		id: uuid(),
		name: "INESIS",
		description: "T-shirts Gofo Polo shrit",
		actualcost: 599,
		discountcost: 499,
		discountOffer: "20%",
		rating: 4,
		totalrating: 25,
		brand: "Artengo",
		category: "shrits",
		stock: false,
		quantity: 10,
		newstock: true,
		imageUrl:
			"https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp732697%2Fk%24a7ceed49f385e3e13bab53fd65f40455%2Fmen-s-golf-polo-shirt-500-petrol-blue.jpg%3F%26f%3D250x250&w=384&q=75",
	},
	{
		id: uuid(),
		name: "QUECHUA",
		description: "Hiking Backpack 20 L",
		actualcost: 1000,
		discountcost: 899,
		discountOffer: "20%",
		rating: 4.5,
		totalrating: 15,
		brand: "Quechua",
		category: "backpack",
		stock: true,
		quantity: 10,
		newstock: false,
		imageUrl:
			"https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1666408%2Fk%2440b483e0ac46881717782194dfebf647%2Ftravel-backpack-60-liters-travel-100-khaki.jpg%3F%26f%3D250x250&w=384&q=75",
	},
];

export default wishlistproducts;
