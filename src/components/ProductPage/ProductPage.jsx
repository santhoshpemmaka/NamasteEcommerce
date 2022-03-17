import React from "react";
import NavbarFilter from "./NavbarFilter/NavbarFilter";
import ProductListing from "./ProductListing/ProductListing";
import "./ProductPage.scss";
const ProductPage = () => {
	return (
		<div className='productpage-container'>
			<NavbarFilter />
			<ProductListing />
		</div>
	);
};

export default ProductPage;
