import React from "react";
import "./ProfilePage.scss";

const AddressCard = () => {
	return (
		<div className='profilecard-container'>
			<h2 className='profilecard-heading'>Address Details</h2>
			<div className='address-details'>
				<h2 className='address-details-heading'>User Adresss</h2>
				<label className='order-detail-address'>
					Deliver to: 1-120,D'sounza Mansion, Ragahvendra Nagar, Tin Factory,
					Bangalore 560012
				</label>
			</div>
		</div>
	);
};

export default AddressCard;
