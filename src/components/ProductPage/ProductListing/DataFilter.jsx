import {useState} from "react";

export const getSortedData = (state, data) => {
	if (state.sortBy === "HIGH_TO_LOW_PRICE") {
		return [...data].sort((product1, product2) => {
			return Number(product2.discountcost) - Number(product1.discountcost);
		});
	}
	if (state.sortBy === "LOW_TO_HIGH_PRICE") {
		return [...data].sort((product1, product2) => {
			return Number(product1.discountcost) - Number(product2.discountcost);
		});
	}
	return data;
};

export const getFilterData = (state, data) => {
	let newData = [...data];
	if (!state.dataFilter.includeOutOfStock) {
		newData = newData.filter((product) => product.stock);
	}
	if (state.dataFilter.filterByCategories.length !== 0) {
		newData = newData.filter((product) =>
			state.dataFilter.filterByCategories.includes(product.categoryName)
		);
	}
	if (state.dataFilter.filterByBrands.length !== 0) {
		newData = newData.filter((product) =>
			state.dataFilter.filterByBrands.includes(product.brand)
		);
	}
	return newData;
};
