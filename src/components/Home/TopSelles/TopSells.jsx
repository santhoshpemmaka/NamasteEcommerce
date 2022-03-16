import React from "react";
import {Link} from "react-router-dom";
import "./TopSells.scss";
const TopSells = () => {
	const productImages = [
		{
			imageUrl:
				"https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp424563%2F65eaabd17d874331ce1d119bc109c464%2Fp424563.jpg%3Fformat%3Dauto&w=384&q=75",
		},
		{
			imageUrl:
				"https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1123657%2Fk%2445c38f2355993a341936413bef0be4e6%2Fmen-s-photographer-jacket-500-brown.jpg%3F%26f%3D250x250&w=384&q=75",
		},
		{
			imageUrl:
				"https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp1420005%2F4067736fa30c86fd7c12291607df5399%2Fp1420005.jpg%3Fformat%3Dauto&w=384&q=75",
		},
		{
			imageUrl:
				"https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fp2073324%2F79be1a70bf19be863141ef791603516e%2Fp2073324.jpg%3Fformat%3Dauto&w=384&q=75",
		},
	];
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
