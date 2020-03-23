import React from 'react';
import './Register.css';
import logo from './logo.png';

function Register({onRouteChange}) {
  return (
  	<div>
  		<div className='center'>
	  		<img className='registerLogo' src={logo} />
	  		<p className='headingRegister black'>Brac University Bus Service </p>
  		</div>
		<article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 body">

			<main className="pa4 black-80">
			  <form className="measure">
				    <fieldset id="register" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" for="name">Name</label>
				        <input className="pa2 input-reset ba mw5 bg-transparent black w-100" placeholder="Enter Your Name" type="name" name="name"  id="name"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" for="email">Email</label>
				        <input className="pa2 input-reset ba mw5 bg-transparent black w-100" placeholder="Enter Your Email" type="email" name="email"  id="email"/>
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" for="id">ID</label>
				        <input className="pa2 input-reset ba mw5 bg-transparent black w-100" placeholder="Enter Your ID Number" type="text" name="id"  id="id"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" for="password">Password</label>
				        <input className="pa2 input-reset ba mw5 bg-transparent black w-100" placeholder="Enter Your Password" type="text" name="password"  id="password"/>
				      </div>
				    </fieldset>
			    <div className="">
			      	<input 
			      		onClick={()=> onRouteChange('home')}
			      		className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      		type="submit" 
			      		value="Register"
			      	/>
			    </div>
			  </form>
			</main>
		    
		</article>
	</div>
  );
}

export default Register;
