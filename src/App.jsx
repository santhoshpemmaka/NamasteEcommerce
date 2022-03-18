import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {Header, Footer, Home, ProductPage} from "./components";
function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<ProductPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
