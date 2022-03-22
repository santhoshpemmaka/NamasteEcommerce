import React, {useState, useEffect} from "react";
import SlideContent from "./SubcarouselComponents/SlideContent";
import Arrows from "./SubcarouselComponents/Arrows";
import Dots from "./SubcarouselComponents/Dots";
import "./CarouselSlider.scss";
import {sliderImages} from "../../../database";
const CarouselSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const len = sliderImages.length - 1;
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex == len ? 0 : activeIndex + 1);
		}, 5000);
		return () => clearInterval(interval);
	}, [activeIndex]);
	return (
		<div className='slider-container'>
			<SlideContent activeIndex={activeIndex} imageSlider={sliderImages} />
			<Arrows
				prevSlider={() =>
					setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
				}
				nextSlider={() =>
					setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
				}
			/>
			<Dots
				activeIndex={activeIndex}
				imageSlider={sliderImages}
				onclick={(activeIndex) => setActiveIndex(activeIndex)}
			/>
		</div>
	);
};

export default CarouselSlider;
