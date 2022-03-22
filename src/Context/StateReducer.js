const stateReducer = (state, {type, payload}) => {
	switch (type) {
		case "SET_PRODUCTS":
			return {...state, products: payload};

		case "SET_CART":
			const cartIndex = state.itemInCart.findIndex((p) => p.id === payload.id);
			if (cartIndex === -1) {
				return {
					...state,
					itemInCart: [...state.itemInCart, {...payload, cartQuantity: 1}],
				};
			} else {
				return {
					...state,
					itemInCart: state.itemInCart.filter((p) => p.id !== payload.id),
				};
			}

		case "SET_WISHLIST":
			const wishIndex = state.itemInwishList.findIndex(
				(p) => p.id === payload.id
			);
			if (wishIndex === -1) {
				return {...state, itemInwishList: [...state.itemInwishList, payload]};
			} else {
				return {
					...state,
					itemInwishList: state.itemInwishList.filter(
						(p) => p.id !== payload.id
					),
				};
			}

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
		default:
			return state;
	}
};

export default stateReducer;
