import React from "react";
import {useNavigate} from "react-router";
import {
	removeProductToWishList,
	addProductToCart,
} from "../../utils/server-request";
import {useStateContext} from "../../Context/StateProvider";
import {isAlreadyAdded} from "../../utils/array-check-conditon";
import {useAuthentication} from "../../Context/AuthContext";

const WishCard = ({product}) => {
	const {state, dispatch} = useStateContext();
	const navigate = useNavigate();
	const isProductInCart = isAlreadyAdded(state.itemInCart, product._id);
	const {
		state: {token},
	} = useAuthentication();
	const handlerButton = (product) => {
		isProductInCart
			? navigate("/cart")
			: addProductToCart({dispatch, product, token});
	};
	const wishlistHandler = (product) => {
		removeProductToWishList({dispatch, product, token});
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
					? "Go to Cart"
					: "Add to Cart"}
			</button>
			<div className='product-listing-rating'>
				{product.rating} <i className='far fa-star'></i> | {product.totalrating}
			</div>
			{product.newstock && <div className='product-listing-new'>New</div>}

			<i
				onClick={() => wishlistHandler(product)}
				className='fas fa-times product-listing-wishicon'></i>
		</div>
	);
};

export default WishCard;
