import React from "react";
import {useStateContext} from "../../Context/StateProvider";

const ItemCard = ({cartItem}) => {
	const {state, dispatch} = useStateContext();
	const moveWishbtnHandler = (product) => {
		dispatch({type: "SET_CART", payload: product});
		if (state.itemInwishList.findIndex((p) => p.id === product.id) === -1) {
			dispatch({type: "SET_WISHLIST", payload: product});
		}
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
					<button className='cartitem-quantity-btn'>
						<i className='fas fa-minus'></i>
					</button>
					<span className='cartitem-num'>{cartItem.cartQuantity}</span>
					<button className='cartitem-quantity-btn'>
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
