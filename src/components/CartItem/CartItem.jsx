import React from "react";
import "./CartItem.scss";
import cartitemproducts from "./CartitemProduct";
const CartItem = () => {
	return (
		<div className='cartitem-container'>
			<h1>My Cart</h1>
			<div className='cartitem-component'>
				<div className='cartitem-items'>
					{cartitemproducts &&
						cartitemproducts.length &&
						cartitemproducts.map((cartItem) => (
							<div className='cart-item' key={cartItem.id}>
								<div className='cartitem-image-container'>
									<img
										className='cartitem-image-res'
										src={cartItem.imageUrl}
										alt='cart-product-image'
										loading='lazy'
									/>
								</div>
								<div className='cartitem-description'>
									<label className='cartitem-heading'>{cartItem.name}</label>
									<label className='cartitem-desc'>
										{cartItem.description}
									</label>
									<label className='cartitem-sold'>Sold by Namaste</label>
									<div className='cartitem-cost'>
										<label className='cartitem-pricecost'>
											Rs.{cartItem.discountcost}
										</label>
										<label className='cartitem-actualcost'>
											Rs.{cartItem.actualcost}
										</label>
										<label className='cartitem-offer'>
											{cartItem.discountOffer} OFF
										</label>
									</div>
									<div className='cartitem-quantity'>
										<button className='cartitem-quantity-btn'>
											<i className='fas fa-minus'></i>
										</button>
										<span className='cartitem-num'>1</span>
										<button className='cartitem-quantity-btn'>
											<i className='fas fa-plus'></i>
										</button>
									</div>
									<button className='cartitem-buttons'>Move to Wishlist</button>
								</div>
							</div>
						))}
				</div>
				<div className='cartitem-display-cost'>
					<label className='cartitem-cost-heading'>PRICE DETAILS</label>
					<div className='cartitem-cost-detail'>
						<span>Total MRP</span>
						<span>Rs.1099</span>
					</div>
					<div className='cartitem-cost-detail'>
						<span>Discount on MRP</span>
						<span className='card-cost-discount'>- Rs. 550</span>
					</div>
					<div className='cartitem-cost-detail'>
						<span>Convenience Fee</span>
						<span>Rs. 99</span>
					</div>
					<div className='cartitem-cost-total'>
						<span>Total Amount</span>
						<span>Rs. 1200</span>
					</div>
					<button className='cartitem-order-btn'>PLACE ORDER</button>
				</div>
			</div>
			<div className='spacer-3rem'></div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default CartItem;
