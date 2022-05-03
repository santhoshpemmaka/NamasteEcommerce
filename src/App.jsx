import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import PrivateRoute from "./PrivateRoute";
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
	ProfilePage,
	ProfileCard,
	SettingCard,
	OrderCard,
	SingleProductPage,
	AddressCard,
} from "./components";
import {useEffect} from "react";
import {
	getProductsServer,
	getCartItemServer,
	getWishListServer,
} from "./utils/server-request";
import {useStateContext} from "./Context/StateProvider";
import {useAuthentication} from "./Context/AuthContext";
function App() {
	const {state, dispatch} = useStateContext();
	const {
		state: {token},
	} = useAuthentication();
	useEffect(() => {
		getProductsServer(dispatch);
	}, []);
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
				<Route path='/shop/:id' element={<SingleProductPage />} />
				<Route
					path='/wishlist'
					element={
						<PrivateRoute>
							<WishList />
						</PrivateRoute>
					}
				/>
				<Route
					path='/cart'
					element={
						<PrivateRoute>
							<CartItem />
						</PrivateRoute>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/profile' element={<ProfilePage />}>
					<Route path='/profile/' element={<ProfileCard />} />
					<Route path='/profile/settings' element={<SettingCard />} />
					<Route path='/profile/orders' element={<OrderCard />} />
					<Route path='/profile/address' element={<AddressCard />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
				<Route path='/error' element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
