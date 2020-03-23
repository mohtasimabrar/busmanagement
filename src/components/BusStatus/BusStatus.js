import React from 'react';
import './BusStatus.css'

function BusStatus() {
  return (
    <div className='bodyBus pa3 mt0'>
      <div className='pt0'>
      	<h1>Bus Arrival</h1>
      </div>
      <div className='cardsBus w-100'>
      	<div className='mw5 center bg-white mh5 br3 pt1 pb2 pa2 ph5-ns mv3 ba b--black-10 cardBus'>
      		<h3>Abdullahpur</h3>
      		<h1 className='green'>Yes</h1>
      	</div>
      	<div className='mw5 center bg-white mh5 br3 pt1 pb2 pa2 ph5-ns mv3 ba b--black-10 cardBusBus'>
      		<h3>Mirpur-1</h3>
      		<h1 className='red'>No</h1>
      	</div>
      	<div className='mw5 center bg-white mh5 br3 pt1 pb2 pa2 ph5-ns mv3 ba b--black-10 cardBus'>
      		<h3>Zigatola</h3>
      		<h1 className='green'>Yes</h1>
      	</div>
      	<div className='mw5 center bg-white mh5 br3 pt1 pb2 pa2 ph5-ns mv3 ba b--black-10 cardBus'>
      		<h3>Jatrabari</h3>
      		<h1 className='red'>No</h1>
      	</div>
      </div>

    </div>
  );
}

export default BusStatus;