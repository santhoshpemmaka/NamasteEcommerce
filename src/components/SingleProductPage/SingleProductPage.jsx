import React from "react";
import {useParams, useNavigate} from "react-router";
import {useStateContext} from "../../Context/StateProvider";
import "./SingleProductPage.scss";
import {isAlreadyAdded} from "../../utils/array-check-conditon";
import {useAuthentication} from "../../Context/AuthContext";
import {
	addProductToCart,
	addProductToWishList,
	removeProductToWishList,
} from "../../utils/server-request";
const SingleProductPage = () => {
	const {state, dispatch} = useStateContext();
	const {
		state: {token},
	} = useAuthentication();
	const {id} = useParams();
	const navigate = useNavigate();
	const singleProduct = state?.products?.find((product) => product._id === id);
	const isAlreadyCart = isAlreadyAdded(state?.itemInCart, id);
	const isAlreadyWishlist = isAlreadyAdded(state?.itemInWishList, id);
	const ratingArray = [1, 2, 3, 4, 5];
	const addcartHandler = (product) => {
		token
			? isAlreadyCart
				? navigate("/cart")
				: addProductToCart({dispatch, product, token})
			: navigate("/login");
	};

	const addwishlistHandler = (product) => {
		token
			? !isAlreadyWishlist
				? addProductToWishList({dispatch, product, token})
				: removeProductToWishList({dispatch, product, token})
			: navigate("/login");
	};
	return singleProduct ? (
		<div className='singleproductpage-container'>
			<div className='single-image-component'>
				<img
					src={singleProduct?.imageUrl}
					alt='product-image'
					className='single-image-response'
				/>
			</div>
			<div className='single-product-info'>
				<h2 className='single-product-heading'>{singleProduct?.description}</h2>
				<h4 className='single-product-brand'>{singleProduct?.name}</h4>
				<div className='single-product-ratings'>
					{singleProduct &&
						ratingArray.map((rating) => (
							<i
								key={rating}
								style={{
									color:
										rating <= Number(singleProduct?.rating) ? "#ffb400" : "",
								}}
								className='fas fa-star rating-icon'></i>
						))}
					<span>({singleProduct?.totalrating} reviews)</span>
				</div>
				<div className='single-product-cost'>
					<label className='single-product-actualcost'>
						Rs. {singleProduct?.actualcost}
					</label>
					<label className='single-product-discountcost'>
						Rs. {singleProduct?.discountcost}
					</label>
					<label className='single-product-discountoffer'>
						({singleProduct?.discountOffer})
					</label>
				</div>

				<label className='single-product-taxes'>inclusive of all taxes</label>
				<div className='single-product-descrption'>
					<label>* Price displayed is inclusive of GST</label>
					<label>
						*{" "}
						{singleProduct?.stock
							? "Currently in stock"
							: "Currently out of stock"}
					</label>
				</div>
				<div className='single-product-buttons'>
					<button
						className={
							singleProduct?.stock
								? "single-product-button"
								: "single-product-button single-product-outstock"
						}
						onClick={() => addcartHandler(singleProduct)}>
						<i className='fas fa-shopping-cart single-product-icon'></i>
						{isAlreadyCart ? "Go To Cart" : "Add To Cart"}
					</button>
					<button
						className={
							singleProduct?.stock
								? "single-product-button"
								: "single-product-button single-product-outstock"
						}
						onClick={() => addwishlistHandler(singleProduct)}>
						<i className='fas fa-heart single-product-icon'></i>Add to Wishlist
					</button>
				</div>
			</div>
		</div>
	) : (
		<h1 className='single-product-noitem'>
			Oops, Something went wrong. Please try again
		</h1>
	);
};

export default SingleProductPage;
