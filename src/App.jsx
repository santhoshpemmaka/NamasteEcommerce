import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import {Routes, Route} from "react-router-dom";
function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<h1>Product Page</h1>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
