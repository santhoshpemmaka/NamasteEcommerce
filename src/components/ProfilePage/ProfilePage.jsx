import React from "react";
import {useAuthentication} from "../../Context/AuthContext";
import {NavLink, Outlet} from "react-router-dom";

import "./ProfilePage.scss";

const ProfilePage = () => {
	const {
		state: {token, userName, email},
		logoutUser,
	} = useAuthentication();

	const items = [
		{
			text: "Profile",
			link: "/profile",
		},
		{
			text: "Orders",
			link: "/profile/orders",
		},
		{
			text: "Settings",
			link: "/profile/settings",
		},
	];
	return token ? (
		<div className='profile-container'>
			<h4 className='profile-heading'>Account</h4>
			<div className='display-flex'>
				<div className='profile-items'>
					{items.map(({text, link}) => (
						<div key={text} className='profile-page-link'>
							<NavLink
								to={link}
								className={({isActive}) =>
									isActive ? "text-green" : "link-no-style"
								}>
								{text}
							</NavLink>
						</div>
					))}
				</div>
				<div className='profile-outlet'>
					<Outlet />
				</div>
			</div>
		</div>
	) : null;
};

export default ProfilePage;
