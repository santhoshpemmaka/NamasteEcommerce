import React, {useEffect, useState} from "react";
import "./ProductListing.scss";
import productData1 from "./Product.js";
import {useStateContext} from "../../../Context/StateProvider";
import ProductCard from "./ProductCard";
import {getFilterData, getSortedData} from "./DataFilter";

const ProductListing = () => {
	const [statusCart, setstatusCart] = useState(false);
	const {state, dispatch} = useStateContext();
	useEffect(() => {
		dispatch({type: "SET_PRODUCTS", payload: productData1});
	}, []);
	const sortedData = getSortedData(state, state.products);
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
