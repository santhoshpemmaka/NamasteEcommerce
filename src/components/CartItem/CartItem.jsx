import React, {useEffect} from "react";
import {useStateContext} from "../../Context/StateProvider";
import "./CartItem.scss";
import ItemCard from "./ItemCard";
import {useOrderSummary} from "./useOrderSummary";

const CartItem = () => {
	const {state, dispatch} = useStateContext();
	const {itemInCart: cartitemproducts} = state;
	const {total, discount, cartTotal} = useOrderSummary();
	console.log(total, discount, cartTotal);
	return (
		<div className='cartitem-container'>
			<h1>My Cart</h1>
			<div className='cartitem-component'>
				<div className='cartitem-items'>
					{cartitemproducts &&
						cartitemproducts.length > 0 &&
						cartitemproducts.map((cartItem) => (
							<ItemCard cartItem={cartItem} key={cartItem.id} />
						))}
				</div>
				{cartitemproducts && cartitemproducts.length > 0 && (
					<div className='cartitem-display-cost'>
						<label className='cartitem-cost-heading'>PRICE DETAILS</label>
						<div className='cartitem-cost-detail'>
							<span>Total MRP</span>
							<span>Rs.{total}</span>
						</div>
						<div className='cartitem-cost-detail'>
							<span>Discount on MRP</span>
							<span className='card-cost-discount'>- Rs. {discount}</span>
						</div>
						<div className='cartitem-cost-detail'>
							<span>Convenience Fee</span>
							<span className='card-cost-discount'>
								<span> Rs. 99 </span>Free{" "}
							</span>
						</div>
						<div className='cartitem-cost-total'>
							<span>Total Amount</span>
							<span>Rs. {cartTotal}</span>
						</div>
						<button className='cartitem-order-btn'>PLACE ORDER</button>
					</div>
				)}
			</div>
			<div className='spacer-3rem'></div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default CartItem;
