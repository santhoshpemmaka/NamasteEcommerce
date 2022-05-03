import React, {useState} from "react";
import "./HeaderMain.scss";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useStateContext} from "../../../Context/StateProvider";
import {useAuthentication} from "../../../Context/AuthContext";
const HeaderMain = () => {
	const [showNav, setshowNav] = useState(false);
	const [searchText, setsearchText] = useState("");
	const {state, dispatch} = useStateContext();
	const {itemInCart, itemInWishList} = state;
	const navigate = useNavigate();
	const {
		state: {token, userName},
		logoutUser,
	} = useAuthentication();

	const navItems = [
		{text: "Home", link: "/", hideInDesktop: false},
		{text: "Shop Now", link: "/shop", hideInDesktop: false},
		{text: "Profile", link: "/profile", hideInDesktop: true},
	];

	const navHandler = () => {
		setshowNav((prev) => !prev);
	};

	const searchHandler = (e) => {
		if (e.key === "Enter" || e.keyCode === 8 || e.target.value) {
			dispatch({
				type: "SEARCH",
				payload: e.target.value,
			});
		}
	};
	return (
		<div className='container'>
			<div className='container-header'>
				<div className='navbar-logo'>
					<i className='fas fa-bars menu-icon' onClick={navHandler}></i>
					<div className='header-logo show-in-mobile'>
						<Link to='/' className='header-logo-name'>
							<label>NAMASTE</label>
						</Link>
					</div>

					{showNav && (
						<div className='navbar-menu'>
							<ul className='nav-bar-links'>
								<li className='list-inline-item avatar-nav-link'>
									<a>
										<span>
											<i className='fas fa-user-alt user-icon'></i>
										</span>
									</a>
									<i
										className='fas fa-times close-icon'
										onClick={navHandler}></i>
								</li>
								{navItems &&
									navItems.length > 0 &&
									navItems.map((item) => (
										<Link
											key={item.text}
											to={item.link}
											style={{textDecoration: "none"}}>
											<li
												key={item.text}
												className='list-inline-item'
												onClick={navHandler}>
												{item.text}
											</li>
										</Link>
									))}
							</ul>
						</div>
					)}
				</div>
				<div className='header-logo hide-in-mobile'>
					<Link to='/' className='header-logo-name'>
						<label>NAMASTE</label>
					</Link>
				</div>
				<ul className='ul-tag-header ul-left'>
					<li className='li-tag-header hide-in-mobile'>
						<Link to='/' className='a-tag-header'>
							<label className='label-name'>Home</label>
						</Link>
					</li>
					<li className='li-tag-header hide-in-mobile'>
						<Link to='/shop' className='a-tag-header'>
							<label className='label-name'>Shop Now</label>
						</Link>
					</li>
				</ul>

				<div className='right-sideheader'>
					<div className='search-bar'>
						<i className='fas fa-search search-icon'></i>
						<input
							type='text'
							className='search-text'
							value={searchText}
							placeholder='Search for products, brands'
							onChange={(e) => setsearchText(e.target.value)}
							onKeyDown={(e) => searchHandler(e)}
						/>
					</div>
					<ul className='ul-tag-header ul-right'>
						{token ? (
							<li className='li-tag-header hide-in-mobile'>
								<Link className='a-tag-header-right' to='/profile'>
									<i className='fas fa-user header-icon'></i>
									<span>Hi,{userName}</span>
								</Link>
							</li>
						) : (
							<li className='li-tag-header hide-in-mobile'>
								<Link className='a-tag-header-right' to='/login'>
									<i className='fas fa-user header-icon'></i>
									<span>Login</span>
								</Link>
							</li>
						)}
						<li className='li-tag-header'>
							<Link className='a-tag-header-right' to='/wishlist'>
								<i className='fas fa-heart header-icon'>
									<span className='wishlist-number'>
										{token ? itemInWishList.length : 0}
									</span>
								</i>
								<span>Wishlist</span>
							</Link>
						</li>
						<li className='li-tag-header card-header'>
							<Link className='a-tag-header-right' to='/cart'>
								<i className='fas fa-shopping-cart header-icon'>
									<span className='cart-number'>
										{token ? itemInCart.length : 0}
									</span>
								</i>
								<span>Cart</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HeaderMain;
