import React from "react";
import {useAuthentication} from "../../Context/AuthContext";

const SettingCard = () => {
	const {logoutUser} = useAuthentication();
	return (
		<div className='profilecard-container'>
			<h2 className='profilecard-heading'>Settings</h2>
			<button className='profilecard-button' onClick={() => logoutUser()}>
				Log Out
			</button>
		</div>
	);
};

export default SettingCard;
