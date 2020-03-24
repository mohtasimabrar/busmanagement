import React from 'react';
import './Signin.css';
import logo from './logo.png';

class Signin extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			signInId: '',
			signInPassword: ''
		}
	}

	onIdChange = (event) =>{
		this.setState({signInId: event.target.value})
	}

	onPasswordChange = (event) =>{
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method:'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.state.signInId,
				password: this.state.signInPassword
			})
		})

		/* The problem is happening here. If i remove the if condition and just change the  state then it works fine. 
		But if i use the condition it just reloads and throws me back to sign in page */
		
		 .then(response => response.json())
		 .then(data => {
		 	if (data === 'error logging in') {
		 		
		 	} else {
		 		this.props.onRouteChange('home');
		 	}
		 })
		 
		 
	}


	render() {
	    
	    return (
		  	<div>
		  		<div className='center'>
			  		<img className='mainLogo' src={logo} />
			  		<p className='headingSignin black'>Brac University Bus Service </p>
		  		</div>
				<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 bodySignin">

					<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" >ID</label>
					        <input 
					        	className="pa2 ba mw5 bg-transparent black w-100" placeholder="Enter Your ID Number" type="Number" name="id"  id="id"
					        	onChange ={this.onIdChange}
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" >Password</label>
					        <input 
					        	className="pa2 ba mw5 bg-transparent black w-100" placeholder="Enter Your Password" type="password" name="password"  id="password"
					        	onChange ={this.onPasswordChange}
					        />
					      </div>
					    </fieldset>
					    <div className="">
					      	<input 
					      		onClick={this.onSubmitSignIn}
					      		className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib" 
					      		type="submit" 
					      		value="Sign in"
					      	/>
					    </div>
					    <div className="lh-copy mt3">
					      <p onClick={()=> this.props.onRouteChange('register')} className="f6 pointer link dim black db">Register</p>
					    </div>
					  </div>
					</main>
				    
				</article>
			</div>
	    );
	}
}

export default Signin;
