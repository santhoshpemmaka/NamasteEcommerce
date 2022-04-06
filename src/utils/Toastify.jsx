import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToCartToast = (text) => {
	toast.success(text, {
		position: "top-right",
		autoClose: 1500,
	});
};

export const addTowishListToast = (text) => {
	toast.success(text, {
		position: "top-right",
		autoClose: 1500,
		closeOnClick: true,
	});
};
export const deleteFromWishListToast = (text) => {
	toast.warn(text, {
		position: "top-right",
		autoClose: 1500,
		hideProgressBar: false,
	});
};

export const errorToast = (text) => {
	toast.error(text, {
		position: "top-right",
		autoClose: 1500,
		hideProgressBar: false,
	});
};
