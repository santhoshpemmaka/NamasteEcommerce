export const useCalculator = ({itemInCart}) => {
	const data = [...itemInCart];
	return data.reduce(
		(accum, curr) => {
			return {
				discount: accum.discount + Number(curr.discountcost) * Number(curr.qty),
				totalMRP: accum.totalMRP + Number(curr.actualcost) * Number(curr.qty),
			};
		},
		{totalMRP: 0, discount: 0}
	);
};
