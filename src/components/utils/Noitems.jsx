import React from "react";
import "./Noitems.scss";
import image from "./no-items.jpg";
const Noitems = () => {
	return (
		<div className='Noitems-container'>
			<h2>Kya kar rhe ho *folk* nft toh add kro</h2>
			<div className='image-response'>
				<img src={image} alt='empty items' />
			</div>
		</div>
	);
};

export default Noitems;
