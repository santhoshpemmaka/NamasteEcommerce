import React from "react";
import {useStateContext} from "../../../Context/StateProvider";
import {useNavigate} from "react-router";
import {
	addProductToCart,
	addProductToWishList,
	removeProductToWishList,
} from "../../../utils/server-request";
import {isAlreadyAdded} from "../../../utils/array-check-conditon";

const ProductCard = ({product}) => {
	const {state, dispatch} = useStateContext();
	const navigate = useNavigate();
	const isProductInCart = isAlreadyAdded(state.itemInCart, product._id);
	const isProductInWishlist =
		state.itemInWishList.length === 0
			? false
			: isAlreadyAdded(state.itemInWishList, product._id);

	const token = JSON.parse(localStorage.getItem("token"));

	const handlerButton = (product) => {
		token
			? isProductInCart
				? navigate("/cart")
				: addProductToCart({dispatch, product, token})
			: navigate("/login");
	};

	const wishlistHandler = (product) => {
		token
			? isAlreadyAdded(state.itemInWishList, product.id)
				? removeProductToWishList({
						dispatch,
						product,
						token,
				  })
				: addProductToWishList({dispatch, product, token})
			: navigate("/login");
	};

	return (
		<div className='product-listing-card' key={product.id}>
			<div className='product-listing-image'>
				<img
					className='product-responsive-image'
					src={product.imageUrl}
					alt='product-image'
				/>
			</div>
			<div className='product-listing-description'>
				<h4>{product.name} by Namaste</h4>
				<p>{product.description}</p>
				<div className='product-listing-display-price'>
					<span className='product-listing-price discount-price'>
						Rs. {product.discountcost}
					</span>
					<span className='product-listing-price actual-price'>
						Rs. {product.actualcost}
					</span>
					<span className='product-listing-price discount-offer'>
						({product.discountOffer} OFF)
					</span>
				</div>
			</div>
			<button
				onClick={() => handlerButton(product)}
				className={`product-listing-btn ${
					product.stock ? "product-in-stock" : "product-out-stock"
				}`}>
				{product.stock && (
					<i className='fas fa-shopping-cart product-listing-icon'></i>
				)}{" "}
				{!product.stock
					? "Out of Stock"
					: isProductInCart
					? "Go to cart"
					: "Add to Cart"}
			</button>
			<div className='product-listing-rating'>
				{product.rating} <i className='far fa-star'></i> | {product.totalrating}
			</div>
			{product.newstock && <div className='product-listing-new'>New</div>}

			<i
				onClick={() => wishlistHandler(product)}
				className={`fas fa-heart product-listing-wishicon ${
					isProductInWishlist ? "wish-active" : "wish-inactive"
				}`}></i>
		</div>
	);
};

export default ProductCard;
