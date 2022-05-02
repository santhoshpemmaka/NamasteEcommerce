const stateReducer = (state, {type, payload}) => {
	switch (type) {
		case "SET_PRODUCTS":
			return {...state, products: payload};

		case "SET_CART":
			return {...state, itemInCart: payload};

		case "SET_WISHLIST":
			return {...state, itemInWishList: payload};

		case "SORT":
			if (payload === "HIGH_TO_LOW_PRICE") {
				return {...state, sortBy: payload};
			}
			if (payload === "LOW_TO_HIGH_PRICE") {
				return {...state, sortBy: payload};
			}
			return {...state, sortBy: ""};

		case "FILTER_BY_CATEGORIES":
			if (state.dataFilter.filterByCategories.includes(payload)) {
				return {
					...state,
					dataFilter: {
						...state.dataFilter,
						filterByCategories: [
							...state.dataFilter.filterByCategories.filter(
								(category) => category !== payload
							),
						],
					},
				};
			} else {
				return {
					...state,
					dataFilter: {
						...state.dataFilter,
						filterByCategories: [
							...state.dataFilter.filterByCategories,
							payload,
						],
					},
				};
			}

		case "FILTER_BY_BRAND":
			return state.dataFilter.filterByBrands.includes(payload)
				? {
						...state,
						dataFilter: {
							...state.dataFilter,
							filterByBrands: [
								...state.dataFilter.filterByBrands.filter(
									(brand) => brand !== payload
								),
							],
						},
				  }
				: {
						...state,
						dataFilter: {
							...state.dataFilter,
							filterByBrands: [...state.dataFilter.filterByBrands, payload],
						},
				  };

		case "INCLUDE_OUT_OF_STOCK":
			return {
				...state,
				dataFilter: {...state.dataFilter, includeOutOfStock: payload},
			};
		case "CLEAR_ALL_FILTERS":
			return {
				...state,
				sortBy: "",
				dataFilter: {
					includeOutOfStock: true,
					filterByCategories: [],
					filterByBrands: [],
				},
			};

		case "SEARCH":
			return {
				...state,
				searchBy: payload,
			};
		default:
			return state;
	}
};

export default stateReducer;
