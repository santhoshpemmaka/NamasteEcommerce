import React from "react";
import {useLocation, Navigate} from "react-router";
import {useAuthentication} from "./Context/AuthContext";

const PrivateRoute = ({children}) => {
	const location = useLocation();
	const {
		state: {token},
	} = useAuthentication();
	return token ? (
		children
	) : (
		<Navigate state={{from: location}} to='/login' replace />
	);
};

export default PrivateRoute;
