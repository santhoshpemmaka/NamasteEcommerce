import axios from "axios";
import {
	addToCartToast,
	addTowishListToast,
	deleteFromWishListToast,
	errorToast,
} from "./Toastify";
export const getProductsServer = async (dispatch) => {
	try {
		const response = await axios({
			method: "GET",
			url: "/api/products",
			headers: {accept: "*/*"},
		});
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_PRODUCTS", payload: response.data.products});
		} else {
			throw new Error("Failed to get products");
		}
	} catch (error) {
		console.log(error);
	}
};

export const getCartItemServer = async (dispatch, token) => {
	try {
		const response = await axios({
			method: "GET",
			url: "/api/user/cart",
			headers: {accept: "*/*", authorization: token},
		});
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_CART", payload: response.data.cart});
		} else {
			throw new Error("Failed to get cart items");
		}
	} catch (error) {
		console.log("Err", error);
	}
};

export const getWishListServer = async (dispatch, token) => {
	try {
		const response = await axios({
			method: "GET",
			url: "/api/user/wishlist",
			headers: {accept: "*/*", authorization: token},
		});
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_WISHLIST", payload: response.data.wishlist});
		} else {
			throw new Error("Failed to get wishlist items");
		}
	} catch (error) {
		console.log("Err", error);
	}
};

export const addProductToCart = async ({dispatch, product, token}) => {
	try {
		const config = {headers: {authorization: token}};
		const response = await axios.post("/api/user/cart", {product}, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_CART", payload: response?.data?.cart});
			addToCartToast("Added To Cart");
		} else {
			throw new Error("Failed to get cart items");
		}
	} catch (error) {
		console.log("Err", error);
		errorToast("Some Unwanted Error Occured");
	}
};

export const removeAllItems = async ({dispatch, token}) => {
	try {
		const config = {headers: {authorization: token}};
		const response = await axios.get("/api/user/allitems", config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_CART", payload: response?.data?.cart});
			addToCartToast("Order is placed");
		} else {
			throw new Error("Failed to placed Order");
		}
	} catch (error) {
		console.log("Err", error);
	}
};

export const addProductToWishList = async ({dispatch, product, token}) => {
	try {
		const config = {headers: {authorization: token}};
		const response = await axios.post("/api/user/wishlist", {product}, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_WISHLIST", payload: response?.data?.wishlist});
			addTowishListToast("Added To WishList");
		} else {
			throw new Error("Failed to get wishlist items");
		}
	} catch (err) {
		console.log("Err", err);
		errorToast("Some Unwanted Error Occured");
	}
};

export const removeProductToWishList = async ({dispatch, product, token}) => {
	try {
		const id = product._id;
		const config = {headers: {accept: "*/*", authorization: token}};
		const response = await axios.delete(`/api/user/wishlist/${id}`, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_WISHLIST", payload: response?.data?.wishlist});
			deleteFromWishListToast("Remove From WishList");
		} else {
			throw new Error("Failed to get wishlist items");
		}
	} catch (error) {
		console.log("Error", error);
		errorToast("Some Unwanted Error Occured");
	}
};

export const removeProductToCartItem = async ({
	dispatch,
	cartItem: product,
	token,
}) => {
	try {
		const id = product._id;
		const config = {headers: {accept: "*/*", authorization: token}};
		const response = await axios.delete(`/api/user/cart/${id}`, config);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_CART", payload: response?.data?.cart});
			deleteFromWishListToast("Remove From Cart");
		} else {
			throw new Error("Failed to get cart items");
		}
	} catch (error) {
		console.log("Error", error);
		errorToast("Some Unwanted Error Occured");
	}
};

export const incrementQtyOfIncrement = async ({
	dispatch,
	cartItem: product,
	token,
}) => {
	try {
		const id = product._id;
		const config = {headers: {accept: "*/*", authorization: token}};
		const response = await axios.post(
			`/api/user/cart/${id}`,
			{action: {type: "increment"}},
			config
		);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_CART", payload: response?.data?.cart});
		} else {
			throw new Error("Failed to get cart items");
		}
	} catch (error) {
		console.log("Error", error);
		errorToast("Some Unwanted Error Occured");
	}
};

export const decrementQtyOfIncrement = async ({
	dispatch,
	cartItem: product,
	token,
}) => {
	try {
		const id = product._id;
		const config = {headers: {accept: "*/*", authorization: token}};
		const response = await axios.post(
			`/api/user/cart/${id}`,
			{action: {type: "decrement"}},
			config
		);
		if (response.status === 200 || response.status === 201) {
			dispatch({type: "SET_CART", payload: response?.data?.cart});
		} else {
			throw new Error("Failed to get cart items");
		}
	} catch (error) {
		console.log("Error", error);
		errorToast("Some Unwanted Error Occured");
	}
};
