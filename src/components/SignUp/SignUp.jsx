import React from "react";
import {Link} from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
	return (
		<div className='signup-container'>
			<div className='spacer-3rem'></div>
			<div class='signup-component'>
				<label class='signup-header'>SIGN UP</label>
				<div class='form-signup'>
					<div class='componet-signup'>
						<label class='label-signup-name'>First Name </label>
						<input
							type='text'
							class='signup-input'
							placeholder='Enter your first name'
							required
						/>
					</div>
					<div class='componet-signup'>
						<label class='label-signup-name'>Last Name </label>
						<input
							type='text'
							class='signup-input'
							placeholder='Enter your last name'
							required
						/>
					</div>
					<div class='componet-signup'>
						<label class='label-signup-name'>Email </label>
						<input
							type='email'
							class='signup-input'
							placeholder='sample@gmail.com'
							required
						/>
					</div>
					<div class='componet-signup'>
						<label class='label-signup-name'>Password </label>
						<input
							type='password'
							class='signup-input'
							placeholder='Enter new password'
							required
						/>
					</div>
					<div class='componet-signup'>
						<label class='label-signup-name'>Confirm Password </label>
						<input
							type='password'
							class='signup-input'
							placeholder='Re-type your password'
							required
						/>
					</div>
					<div class='terms-conditons'>
						<input class='terms-checkbox' type='checkbox' />{" "}
						<label>I accept all terms & conditions.</label>
					</div>
					<button class='register-btn'>REGISTER</button>
					<label class='sigup-register'>
						Already registered? <Link to='/login'>Login here</Link>
					</label>
				</div>
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default SignUp;
