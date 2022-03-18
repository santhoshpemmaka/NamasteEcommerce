import React from "react";
import "./NavbarFilter.scss";

const NavbarFilter = () => {
	const brandNames = [
		{
			name: "Domyos",
		},
		{
			name: "Artengo",
		},
		{
			name: "Quechua",
		},
		{
			name: "Kalenji",
		},
	];
	const categoryNames = [
		{
			name: "shirts",
		},
		{
			name: "shoes",
		},
		{
			name: "trousers",
		},
		{
			name: "backpack",
		},
		{
			name: "sunglasses",
		},
	];
	return (
		<div className='navbarfilter-container'>
			<div className='spacer-3rem'></div>
			<div className='category-labels'>
				<label className='category-heading'>FILTERS</label>
				<label className='category-heading1'>CLEAR ALL</label>
			</div>
			<div className='navbarfilter-price'>
				<h3 className='navbarfilter-sort'>SORT</h3>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input className='navbarfilter-checkbox' type='radio' />
						Price High to Low
					</label>
				</div>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input className='navbarfilter-checkbox' type='radio' />
						Price Low to High
					</label>
				</div>
			</div>
			<div className='navbar-filter-line'></div>
			<h3 className='navbarfilter-sort'>BRANDS</h3>
			{brandNames &&
				brandNames.length &&
				brandNames.map(({name}) => (
					<div key={name} className='navbarfilter-price'>
						<div className='navbarfilter-display'>
							<label className='navbarfilter-label'>
								<input className='navbarfilter-checkbox' type='checkbox' />
								{name}
							</label>
						</div>
					</div>
				))}
			<div className='navbar-filter-line'></div>
			<h3 className='navbarfilter-sort'>CATEGORIES</h3>
			{categoryNames &&
				categoryNames.length &&
				categoryNames.map(({name}) => (
					<div key={name} className='navbarfilter-price'>
						<div className='navbarfilter-display'>
							<label className='navbarfilter-label'>
								<input className='navbarfilter-checkbox' type='checkbox' />
								{name}
							</label>
						</div>
					</div>
				))}
			<div className='navbar-filter-line'></div>
			<h3 className='navbarfilter-sort'>OTHERS</h3>
			<div className='navbarfilter-price'>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input className='navbarfilter-checkbox' type='checkbox' />
						Include out of stock
					</label>
				</div>
			</div>
		</div>
	);
};

export default NavbarFilter;
