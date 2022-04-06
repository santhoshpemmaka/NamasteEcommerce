import React from "react";
import {useStateContext} from "../../Context/StateProvider";
import WishCard from "./WishCard";
import "./WishList.scss";
import Noitems from "../Noitems/Noitems";
const WishList = () => {
	const {state, dispatch} = useStateContext();
	const {itemInWishList: wishlistproducts} = state;
	return (
		<div className='wishlist-container'>
			<div className='spacer-3rem'></div>
			<h1>
				My WishList
				<span> {wishlistproducts.length} Items</span>{" "}
			</h1>
			{wishlistproducts && wishlistproducts.length === 0 ? (
				<Noitems />
			) : (
				<div className='grid-4-column-layout-wishlist'>
					{wishlistproducts.map((product) => (
						<WishCard product={product} key={product.id} />
					))}
				</div>
			)}
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default WishList;
