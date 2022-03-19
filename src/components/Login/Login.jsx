import React from "react";
import {Link} from "react-router-dom";
import "./Login.scss";
const Login = () => {
	return (
		<div className='login-container'>
			<div className='login-component'>
				<label className='login-heading'>LOGIN</label>
				<div className='login-inputs'>
					<input
						className='login-input'
						type='email'
						placeholder='Enter your email here'
					/>
					<input
						className='login-input'
						type='password'
						placeholder='Enter your password here'
					/>
					<Link className='forgot-alink' to='/'>
						<label className='forgot-password'>Forgot your password?</label>
					</Link>
					<button className='login-input login-btn'>LOGIN</button>
					<label className='login-text'>
						Not a user yet ? <Link to='/signup'>Create your account</Link>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Login;
