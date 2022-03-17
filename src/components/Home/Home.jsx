import React from "react";
import CarouselSlider from "./CarouselSlider/CarouselSlider";
import FeatureBrands from "./FeaturedBrands/FeatureBrands";
import "./Home.scss";
import TopSells from "./TopSelles/TopSells";
const Home = () => {
	return (
		<div className='home-container'>
			<CarouselSlider />
			<div className='spacer-3rem'></div>
			<div className='spacer-3rem'></div>
			<TopSells />
			<div className='spacer-3rem'></div>
			<div className='spacer-3rem'></div>
			<FeatureBrands />
			<div className='spacer-3rem'></div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default Home;
