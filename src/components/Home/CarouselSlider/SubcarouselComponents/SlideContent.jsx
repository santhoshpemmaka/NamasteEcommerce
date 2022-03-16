import React from "react";

const SlideContent = ({activeIndex, imageSlider}) => {
	return (
		<section>
			{imageSlider &&
				imageSlider.map((slide, index) => (
					<div
						key={index}
						className={index === activeIndex ? "slides active" : "inactive"}>
						<img className='slide-image' src={slide.urls} alt='' />
					</div>
				))}
		</section>
	);
};

export default SlideContent;
