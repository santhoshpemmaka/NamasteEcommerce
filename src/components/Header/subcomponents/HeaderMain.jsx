import React, {useState} from "react";
import "./HeaderMain.scss";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useStateContext} from "../../../Context/StateProvider";
const HeaderMain = () => {
	const [showNav, setshowNav] = useState(false);
	const {state} = useStateContext();
	const {itemInCart, itemInWishList} = state;
	const navigate = useNavigate();
	const token = JSON.parse(localStorage.getItem("token"));
	const navItems = [
		{text: "Home", link: "/", hideInDesktop: false},
		{text: "Shop Now", link: "/shop", hideInDesktop: false},
		{text: "Profile", link: "/profile", hideInDesktop: true},
		{text: "Orders", link: "/profile/orders", hideInDesktop: true},
		{text: "Addresses", link: "/profile/address", hideInDesktop: true},
		{text: "Settings", link: "/profile/settings", hideInDesktop: true},
	];
	const navHandler = () => {
		setshowNav((prev) => !prev);
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
							placeholder='Search for products, brands'
						/>
					</div>
					<ul className='ul-tag-header ul-right'>
						<li className='li-tag-header hide-in-mobile'>
							<Link className='a-tag-header-right' to='/login'>
								<i className='fas fa-user header-icon'></i>
								<span>Login</span>
							</Link>
						</li>
						<li className='li-tag-header'>
							<Link
								className='a-tag-header-right'
								to={token ? "/wishlist" : "/login"}>
								<i className='fas fa-heart header-icon'>
									<span className='wishlist-number'>
										{itemInWishList.length}
									</span>
								</i>
								<span>Wishlist</span>
							</Link>
						</li>
						<li className='li-tag-header card-header'>
							<Link
								className='a-tag-header-right'
								to={token ? "/cart" : "/login"}>
								<i className='fas fa-shopping-cart header-icon'>
									<span className='cart-number'>{itemInCart.length}</span>
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
