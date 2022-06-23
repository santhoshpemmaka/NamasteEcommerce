import React, {useEffect, useState} from "react";
import {v4 as uuid} from "uuid";
import {useStateContext} from "../../Context/StateProvider";
import "./CartItem.scss";
import ItemCard from "./ItemCard";
import {useOrderSummary} from "./useOrderSummary";
import Noitems from "../Noitems/Noitems";
import {useNavigate} from "react-router";
import {removeAllItems} from "../../utils/server-request";
import {useAuthentication} from "../../Context/AuthContext";

const CartItem = () => {
	const {state, dispatch} = useStateContext();
	const {itemInCart: cartitemproducts} = state;
	const {total, discount, cartTotal} = useOrderSummary();
	const [showPlaceOrder, setshowPlaceOrder] = useState(false);

	const placeOrderHandler = () => {
		setshowPlaceOrder((prev) => !prev);
	};
	return (
		<div className='cartitem-container'>
			<h1>
				My Cart
				<span>{cartitemproducts.length} items</span>
			</h1>
			{cartitemproducts.length === 0 ? (
				<Noitems />
			) : (
				<div className='cartitem-component'>
					<div className='cartitem-items'>
						{cartitemproducts.map((cartItem) => (
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
							<button
								className='cartitem-order-btn'
								onClick={() => placeOrderHandler()}>
								PLACE ORDER
							</button>
						</div>
					)}
					{showPlaceOrder && (
						<ShowPlaceOrderModal
							state={state}
							totalAmount={cartTotal}
							setshowPlaceOrder={setshowPlaceOrder}
							dispatch={dispatch}
						/>
					)}
				</div>
			)}
			<div className='spacer-3rem'></div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default CartItem;

const ShowPlaceOrderModal = ({
	setshowPlaceOrder,
	totalAmount,
	state,
	dispatch,
}) => {
	const navigate = useNavigate();
	const orderId = uuid().replaceAll("-", "");
	const {
		state: {token},
	} = useAuthentication();
	const viewDetailsHandler = (orderId) => {
		const orderObject = [
			{
				orderitems: state?.itemInCart,
				orderAmount: totalAmount,
				orderId: orderId,
			},
		];
		dispatch({
			type: "ORDER_DETAILS",
			payload: orderObject,
		});
		removeAllItems({dispatch, token});
		navigate("/profile/orders");
	};
	return (
		<div className='order-detail-container'>
			<div className='modal-content'>
				<div>
					<h2 className='order-confirm'>Order Confirmed </h2>
					<h2 className='order-confirm-id'>Order No: {orderId}</h2>
					<label className='order-confirm-thanks'>
						Thanks you shopping with us!
					</label>
					<div className='order-conirm-buttons'>
						<button onClick={() => viewDetailsHandler(orderId)}>
							View Order
						</button>
						<button onClick={() => setshowPlaceOrder((prev) => !prev)}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
