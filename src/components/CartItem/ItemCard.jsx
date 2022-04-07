import React from "react";
import {useStateContext} from "../../Context/StateProvider";
import {
	incrementQtyOfIncrement,
	decrementQtyOfIncrement,
	removeProductToCartItem,
	addProductToWishList,
} from "../../utils/server-request";
import {isAlreadyAdded} from "../../utils/array-check-conditon";
import {useAuthentication} from "../../Context/AuthContext";

const ItemCard = ({cartItem}) => {
	const {state, dispatch} = useStateContext();
	const {
		state: {token},
	} = useAuthentication();
	const moveWishbtnHandler = (product) => {
		const productInWishlist = isAlreadyAdded(state.itemInWishList, product._id);
		if (!productInWishlist) {
			addProductToWishList({dispatch, product, token});
		}
		const cartItem = product;
		removeProductToCartItem({dispatch, cartItem, token});
	};
	return (
		<div className='cart-item' key={cartItem.id}>
			<div className='cartitem-image-container'>
				<img
					className='cartitem-image-res'
					src={cartItem.imageUrl}
					alt='product-image'
					loading='lazy'
				/>
			</div>
			<div className='cartitem-description'>
				<label className='cartitem-heading'>{cartItem.name}</label>
				<label className='cartitem-desc'>{cartItem.description}</label>
				<label className='cartitem-sold'>Sold by Namaste</label>
				<div className='cartitem-cost'>
					<label className='cartitem-pricecost'>
						Rs.{cartItem.discountcost}
					</label>
					<label className='cartitem-actualcost'>
						Rs.{cartItem.actualcost}
					</label>
					<label className='cartitem-offer'>{cartItem.discountOffer} OFF</label>
				</div>
				<div className='cartitem-quantity'>
					<button
						className='cartitem-quantity-btn'
						onClick={() =>
							cartItem.qty !== 1
								? decrementQtyOfIncrement({
										dispatch,
										cartItem,
										token,
								  })
								: removeProductToCartItem({
										dispatch,
										cartItem,
										token,
								  })
						}>
						<i className='fas fa-minus'></i>
					</button>
					<span className='cartitem-num'>{cartItem.qty}</span>
					<button
						className='cartitem-quantity-btn'
						onClick={() =>
							incrementQtyOfIncrement({dispatch, cartItem, token})
						}>
						<i className='fas fa-plus'></i>
					</button>
				</div>
				<button
					onClick={() => moveWishbtnHandler(cartItem)}
					className='cartitem-buttons'>
					Move to Wishlist
				</button>
			</div>
		</div>
	);
};

export default ItemCard;
