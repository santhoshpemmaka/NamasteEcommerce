import React from "react";
import {useStateContext} from "../../../Context/StateProvider";
import {useNavigate} from "react-router";

const ProductCard = ({product}) => {
	const {state, dispatch} = useStateContext();
	const navigate = useNavigate();
	const isProductInCart =
		state.itemInCart &&
		state.itemInCart.findIndex((p) => p.id == product.id) === -1
			? false
			: true;
	const isProductInWishlist =
		state.itemInwishList &&
		state.itemInwishList.findIndex((p) => p.id === product.id) === -1
			? false
			: true;
	const handlerButton = (product) => {
		isProductInCart
			? navigate("/cart")
			: dispatch({type: "SET_CART", payload: product});
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
				className={`${
					product.stock
						? "product-listing-btn product-in-stock"
						: "product-listing-btn product-out-stock"
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
				onClick={() => dispatch({type: "SET_WISHLIST", payload: product})}
				className={`${
					isProductInWishlist
						? " fas fa-heart product-listing-wishicon wish-active"
						: " fas fa-heart product-listing-wishicon wish-inactive"
				}`}></i>
		</div>
	);
};

export default ProductCard;
