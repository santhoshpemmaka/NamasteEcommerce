import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import {
	Header,
	Footer,
	Home,
	ProductPage,
	WishList,
	CartItem,
	Login,
	SignUp,
	ErrorPage,
} from "./components";
import {useEffect} from "react";
import {
	getProductsServer,
	getCartItemServer,
	getWishListServer,
} from "./utils/server-request";
import {useStateContext} from "./Context/StateProvider";
function App() {
	const {state, dispatch} = useStateContext();
	useEffect(() => {
		getProductsServer(dispatch);
	}, []);
	const token = JSON.parse(localStorage.getItem("token"));
	useEffect(() => {
		if (token) {
			getCartItemServer(dispatch, token);
			getWishListServer(dispatch, token);
		}
	}, [token]);
	return (
		<div className='App'>
			<Header />
			<ToastContainer />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<ProductPage />} />
				<Route path='/wishlist' element={<WishList />} />
				<Route path='/cart' element={<CartItem />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
