import React from 'react';
import './Seat.css'

function Seat() {
  return (
    <div className='bodyNav pa3 mb4'>
      <div className='pt0'>
      	<h1>Available Seats</h1>
      </div>
      <div className='cards w-100'>
      	<div className='mw5 center bg-white mh5 br3 pt1 pb2 pa2 ph5-ns mv3 ba b--black-10 card'>
      		<h3>Abdullahpur</h3>
      		<h1>65</h1>
      	</div>
      	<div className='mw5 center bg-white mh5 br3 pt1 pb2 pa2 ph5-ns mv3 ba b--black-10 card'>
      		<h3>Mirpur-1</h3>
      		<h1>65</h1>
      	</div>
      	<div className='mw5 center bg-white mh5 br3 pt1 pb2 pa2 ph5-ns mv3 ba b--black-10 card'>
      		<h3>Zigatola</h3>
      		<h1>65</h1>
      	</div>
      	<div className='mw5 center bg-white mh5 br3 pt1 pb2 pa2 ph5-ns mv3 ba b--black-10 card'>
      		<h3>Jatrabari</h3>
      		<h1>65</h1>
      	</div>
      </div>

    </div>
  );
}

export default Seat;