export const isAlreadyAdded = (itemsArray, id) => {
	if (itemsArray) {
		return itemsArray.findIndex((item) => item._id === id) === -1
			? false
			: true;
	}
	return false;
};
