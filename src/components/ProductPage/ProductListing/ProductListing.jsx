import React, {useEffect, useState} from "react";
import "./ProductListing.scss";
import {useStateContext} from "../../../Context/StateProvider";
import ProductCard from "./ProductCard";
import {getFilterData, getSortedData, getSearchData} from "./DataFilter";

const ProductListing = () => {
	const [statusCart, setstatusCart] = useState(false);
	const {state, dispatch} = useStateContext();
	const searchData = getSearchData(state);
	const sortedData = getSortedData(state, searchData);
	const productData = getFilterData(state, sortedData);
	return (
		<div className='productlisting-container'>
			<div className='spacer-3rem'></div>
			<div className='grid-3-columnlayout'>
				{productData &&
					productData.length > 0 &&
					productData.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default ProductListing;
