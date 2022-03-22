import {useStateContext} from "../../Context/StateProvider";
import {useCalculator} from "./useCalculator";

export const useOrderSummary = () => {
	const {state} = useStateContext();
	const cartDetails = useCalculator(state);
	return {
		total: cartDetails.totalMRP.toFixed(2),
		discount: (cartDetails.totalMRP - cartDetails.discount).toFixed(2),
		cartTotal: cartDetails.discount.toFixed(2),
	};
};
