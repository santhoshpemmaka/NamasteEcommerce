import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {
	Header,
	Footer,
	Home,
	ProductPage,
	WishList,
	CartItem,
	Login,
	SignUp,
} from "./components";

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<ProductPage />} />
				<Route path='/wishlist' element={<WishList />} />
				<Route path='/cart' element={<CartItem />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
