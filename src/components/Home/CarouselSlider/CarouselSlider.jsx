import React, {useState, useEffect} from "react";
import SlideContent from "./SubcarouselComponents/SlideContent";
import Arrows from "./SubcarouselComponents/Arrows";
import Dots from "./SubcarouselComponents/Dots";
import "./CarouselSlider.scss";

const CarouselSlider = () => {
	const sliderImages = [
		{
			title: "First Slider Image",
			description: "This is the first image",
			urls: "https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs913279%2Fk%240a4673bd73433da6ce81b34429a752ab%2Fhp%2520na.jpg%3Ff%3D1920x500%26format%3Dauto&w=1920&q=75",
		},
		{
			title: "second Slider Image",
			description: "This is the first image",
			urls: "https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs913586%2Fk%24d8bbb7d546f89df102c34657875b46be%2Fpolo%2520desktop%25201.jpg%3Ff%3D1920x500%26format%3Dauto&w=1920&q=75",
		},
		{
			title: "third Slider Image",
			description: "This is the first image",
			urls: "https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs913279%2Fk%240a4673bd73433da6ce81b34429a752ab%2Fhp%2520na.jpg%3Ff%3D1920x500%26format%3Dauto&w=1920&q=75",
		},
		{
			title: "Fourth Slider Image",
			description: "This is the first image",
			urls: "https://www.decathlon.in/_next/image?url=https%3A%2F%2Fcontents.mediadecathlon.com%2Fs913586%2Fk%24d8bbb7d546f89df102c34657875b46be%2Fpolo%2520desktop%25201.jpg%3Ff%3D1920x500%26format%3Dauto&w=1920&q=75",
		},
	];
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
