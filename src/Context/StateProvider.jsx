import {createContext, useContext, useReducer} from "react";
import stateReducer from "./StateReducer";
const StateContext = createContext();

const StateProvider = ({children}) => {
	const initialState = {
		products: [],
		itemInCart: [],
		itemInWishList: [],
		dataFilter: {
			includeOutOfStock: true,
			filterByCategories: [],
			filterByBrands: [],
		},
		sortBy: "",
	};

	const [state, dispatch] = useReducer(stateReducer, initialState);

	return (
		<StateContext.Provider value={{state, dispatch}}>
			{children}
		</StateContext.Provider>
	);
};

const useStateContext = () => useContext(StateContext);

export {StateProvider, useStateContext};
