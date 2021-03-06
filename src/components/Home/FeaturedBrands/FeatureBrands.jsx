import React from "react";
import "./FeaturedBrands.scss";
import {First, Second, Thrid, Four} from "./BrandAssests";
const FeatureBrands = () => {
	const brandImages = [
		{
			imageUrl: First,
		},
		{
			imageUrl: Second,
		},
		{
			imageUrl: Thrid,
		},
		{
			imageUrl: Four,
		},
	];
	return (
		<div>
			<h2 className='feature-heading'>Shopping Brands</h2>
			<div className='feature-underline'></div>
			<div className='grid-4-column-layout'>
				{brandImages &&
					brandImages.map((brand, index) => (
						<div key={index} className='brand-container'>
							<div className='brand-image-container'>
								<img
									className='brand-image'
									src={brand.imageUrl}
									alt='brandimage'
									loading='lazy'
								/>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default FeatureBrands;
