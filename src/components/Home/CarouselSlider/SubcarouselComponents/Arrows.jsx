import React from "react";

const Arrows = ({prevSlider, nextSlider}) => {
	return (
		<div className='arrows'>
			<span className='prev' onClick={prevSlider}>
				&#10094;
			</span>
			<span className='next' onClick={nextSlider}>
				&#10095;
			</span>
		</div>
	);
};

export default Arrows;
