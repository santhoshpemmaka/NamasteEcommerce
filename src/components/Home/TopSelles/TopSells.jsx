import React from "react";
import {Link} from "react-router-dom";
import "./TopSells.scss";
import {productImages} from "../../../database";
const TopSells = () => {
	return (
		<div>
			<h2 className='topselling-heading'>Trending Products</h2>
			<div className='topselling-underline'></div>
			<div className='grid-4-column-layout'>
				{productImages &&
					productImages.map((brand, index) => (
						<div key={index} className='product-container'>
							<div className='product-image-container'>
								<img
									className='product-image'
									src={brand.imageUrl}
									alt='productimage'
									loading='lazy'
								/>
							</div>
							<Link to='/shop' className='top-product-botton'>
								Shop Now
							</Link>
						</div>
					))}
			</div>
		</div>
	);
};

export default TopSells;
