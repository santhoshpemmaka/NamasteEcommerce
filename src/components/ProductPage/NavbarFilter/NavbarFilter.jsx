import React from "react";
import {useStateContext} from "../../../Context/StateProvider";
import {brandNames, categoryNames} from "../../../database";
import "./NavbarFilter.scss";

const NavbarFilter = () => {
	const {state, dispatch} = useStateContext();
	const sortByPrice = (e) => {
		dispatch({type: "SORT", payload: e.target.value});
	};
	return (
		<div className='navbarfilter-container'>
			<div className='spacer-3rem'></div>
			<div className='category-labels'>
				<label className='category-heading'>FILTERS</label>
				<label
					onClick={() => {
						dispatch({type: "CLEAR_ALL_FILTERS"});
					}}
					className='category-heading1'>
					CLEAR ALL
				</label>
			</div>
			<div className='navbarfilter-price'>
				<h3 className='navbarfilter-sort'>SORT</h3>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='radio'
							name='sort'
							value='HIGH_TO_LOW_PRICE'
							onChange={sortByPrice}
							checked={"HIGH_TO_LOW_PRICE" === state.sortBy}
						/>
						Price High to Low
					</label>
				</div>
				<div className='navbarfilter-display'>
					<label className='navbarfilter-label'>
						<input
							className='navbarfilter-checkbox'
							type='radio'
							name='sort'
							value={"LOW_TO_HIGH_PRICE"}
							onChange={sortByPrice}
							checked={"LOW_TO_HIGH_PRICE" === state.sortBy}
						/>
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
								<input
									className='navbarfilter-checkbox'
									type='checkbox'
									checked={state.dataFilter.filterByBrands.includes(name)}
									onChange={() =>
										dispatch({type: "FILTER_BY_BRAND", payload: name})
									}
								/>
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
								<input
									className='navbarfilter-checkbox'
									type='checkbox'
									checked={state.dataFilter.filterByCategories.includes(name)}
									onChange={() =>
										dispatch({type: "FILTER_BY_CATEGORIES", payload: name})
									}
								/>
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
						<input
							className='navbarfilter-checkbox'
							type='checkbox'
							checked={state.dataFilter.includeOutOfStock}
							onChange={() =>
								dispatch({
									type: "INCLUDE_OUT_OF_STOCK",
									payload: !state.dataFilter.includeOutOfStock,
								})
							}
						/>
						Include out of stock
					</label>
				</div>
			</div>
		</div>
	);
};

export default NavbarFilter;
