import React from "react";
import {useStateContext} from "../../Context/StateProvider";
import WishCard from "./WishCard";
import "./WishList.scss";

const WishList = () => {
	const {state, dispatch} = useStateContext();
	const {itemInwishList: wishlistproducts} = state;
	return (
		<div className='wishlist-container'>
			<div className='spacer-3rem'></div>
			<h1>
				My WishList
				<span> {wishlistproducts.length} Items</span>{" "}
			</h1>
			<div className='grid-4-column-layout-wishlist'>
				{wishlistproducts &&
					wishlistproducts.length > 0 &&
					wishlistproducts.map((product) => (
						<WishCard product={product} key={product.id} />
					))}
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default WishList;
