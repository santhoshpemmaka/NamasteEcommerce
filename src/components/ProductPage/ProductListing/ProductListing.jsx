import React, {useState} from "react";
import "./ProductListing.scss";
import productData from "./Product.js";
const ProductListing = () => {
	console.log(productData);
	const [statusCart, setstatusCart] = useState(false);
	return (
		<div className='productlisting-container'>
			<div className='spacer-3rem'></div>
			<div className='grid-3-columnlayout'>
				{productData &&
					productData.length &&
					productData.map((product) => (
						<div className='product-listing-card' key={product.id}>
							<div className='product-listing-image'>
								<img
									className='product-responsive-image'
									src={product.imageUrl}
									alt='product-image'
								/>
							</div>
							<div className='product-listing-description'>
								<h4>{product.name} by Namaste</h4>
								<p>{product.description}</p>
								<div className='product-listing-display-price'>
									<span className='product-listing-price discount-price'>
										Rs. {product.discountcost}
									</span>
									<span className='product-listing-price actual-price'>
										Rs. {product.actualcost}
									</span>
									<span className='product-listing-price discount-offer'>
										({product.discountOffer} OFF)
									</span>
								</div>
							</div>
							<button
								href='#'
								className={`${
									product.stock
										? "product-listing-btn product-in-stock"
										: "product-listing-btn product-out-stock"
								}`}>
								{product.stock && (
									<i className='fas fa-shopping-cart product-listing-icon'></i>
								)}{" "}
								{!product.stock ? "Out of Stock" : "Add to Cart"}
							</button>
							<div className='product-listing-rating'>
								{product.rating} <i className='far fa-star'></i> |{" "}
								{product.totalrating}
							</div>
							{product.newstock && (
								<div className='product-listing-new'>New</div>
							)}

							<i className='fas fa-heart product-listing-wishicon'></i>
						</div>
					))}
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default ProductListing;
