import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {
	Header,
	Footer,
	Home,
	ProductPage,
	WishList,
	CartItem,
} from "./components";

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<ProductPage />} />
				<Route path='/wishlist' element={<WishList />} />{" "}
				<Route path='/cart' element={<CartItem />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
