import React from 'react';
import logo from './logo.png';
import './logo.css'

function Logo({onRouteChange}) {
  return (
  	<article class="cf">
      	<div class="fl w-50 tl pl5">
        	<div className='tc logodiv'>
     			<img className='image' src={logo} />
     			<p className='para grey'>Brac University Bus Service </p>
    		</div>
      	</div>
      	<div class="fl w-50 tr pr5">
        	<dl class="dib">
    			<dd class="f6 f5-ns b ml0">Wallet</dd>
    			<dd class="f3 f2-ns b ml0">BDT 1,000</dd>
    			<a class="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue mt2" href="#0">Recharge</a>
  			</dl>
  			<dl class="dib mr5">
  				<img src="http://tachyons.io/img/logo.jpg" className="br-100 pa1 ba b--black-10 h3 w3 tc" alt="avatar"/>
    			<dd onClick={()=> onRouteChange('signin')} class="dim f3 f3-ns b pointer">Sign Out</dd>
  			</dl>
      	</div>
    </article>
  );
}

export default Logo;
