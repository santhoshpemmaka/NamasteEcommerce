import React from "react";
import {useAuthentication} from "../../Context/AuthContext";
import "./ProfilePage.scss";
const ProfileCard = () => {
	const {
		state: {userName, email},
	} = useAuthentication();
	return (
		<div className='profilecard-container'>
			<h2 className='profilecard-heading'>Profile Details</h2>
			<div>
				<div className='profilecard-display'>
					<span className='profilecard-name'>Full Name</span>
					<span>{userName}</span>
				</div>
				<div className='profilecard-display'>
					<span className='profilecard-name'>Email ID</span>
					<span>{email}</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
