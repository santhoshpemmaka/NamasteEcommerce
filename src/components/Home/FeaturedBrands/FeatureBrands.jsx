import React from "react";
import "./FeaturedBrands.scss";
import First from "../FeaturedBrands/BrandAssests/brand1.jpg";
import Second from "../FeaturedBrands/BrandAssests/brand2.png";
import Thrid from "../FeaturedBrands/BrandAssests/brand3.jpg";
import Four from "../FeaturedBrands/BrandAssests/brand4.png";
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
