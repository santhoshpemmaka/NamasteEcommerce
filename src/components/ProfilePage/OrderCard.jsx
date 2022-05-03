import React from "react";
import {useStateContext} from "../../Context/StateProvider";
import "./ProfilePage.scss";

const OrderCard = () => {
	const {state} = useStateContext();
	const orderDetails = state?.orderDetails;
	return (
		<div className='profilecard-container'>
			<h2 className='profilecard-heading'>Orders Details</h2>
			{orderDetails.length > 0 && (
				<div className='order-details'>
					<>
						<h2 className='order-detail-heading'>Order Confirmed</h2>
						<h2 className='order-detail-date'>{new Date().toDateString()}</h2>
						<h2 className='order-detail-id'>
							Order Id #{orderDetails[0].orderId}
						</h2>
						<h2 className='order-detail-amount'>
							Total: Rs{orderDetails[0].orderAmount}
						</h2>
						<label className='order-detail-address'>
							Deliver to: 1-120,D'sounza Mansion, Ragahvendra Nagar, Tin
							Factory, Bangalore 560012
						</label>
						<h2 className='order-detail-heading'>Order Items</h2>
					</>
					{orderDetails &&
						orderDetails[0]?.orderitems.map((order) => (
							<>
								<div className='order-detail-items'>
									<label>* {order.description}</label>
									<label>{order.qty} Qty</label>
								</div>
							</>
						))}
				</div>
			)}
		</div>
	);
};

export default OrderCard;
