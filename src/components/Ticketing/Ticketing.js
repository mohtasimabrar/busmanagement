import React from 'react';

function Ticketing() {
  return (
    <article className="cf mt3 white status">
      <div className="fl w-50 tl pl5">
        <article className="pl3 pb3 pr3 pa5-ns" data-name="slab-stat">
          <h1 className='f1'>Ticket Status</h1>
          <div>
            <dl className="dib mr5">
              <dd className="f5 f5-ns b ml0">Ticket Number</dd>
              <dd className="f3 f2-ns b ml0">112244</dd>
            </dl>
            <dl className="dib mr5">
              <dd className="f5 f5-ns b ml0">Location</dd>
              <dd className="f3 f2-ns b ml0">Abdullahpur</dd>
            </dl>
          </div>
          <div> 
            <dl className="dib mr5">
              <dd className="f5 f5-ns b ml0">Date</dd>
              <dd className="f3 f2-ns b ml0">10-03-2020</dd>
            </dl>
            <dl className="dib mr5">
              <dd className="f5 f5-ns b ml0">Time</dd>
              <dd className="f3 f2-ns b ml0">5 PM</dd>
            </dl>
            <dl className="dib mr5">
              <dd className="f5 f5-ns b ml0">Payment Confirmation</dd>
              <dd className="f3 f2-ns b ml0">NO</dd>
            </dl>
          </div>
        </article>
      </div>
      <div className="fl w-50 bg-light-gray tr m5 shadow-5">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 b fw6 ph0 mh0">Purchase Ticket</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" for="email-address">ID</label>
                  <input className="pa2 input-reset ba bg-transparent w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" for="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"  id="password"/>
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" for="cars">Choose Location</label>
                    <select className='b pa2 input-reset ba b--black bg-transparent w-100'id="cars" name="carlist" form="carform">
                    <option value="volvo">Abdullahpur</option>
                    <option value="saab">Mirpur-1</option>
                    <option value="opel">Zigatola</option>
                    <option value="audi">Jatrabari</option>
                  </select>
                </div>
              </fieldset>
            <div className="">
              <p className='b ph3 pv2 dib bg-transparent f5'>BDT 50</p>
              <a className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue mt2" href="#0">Purchase</a>
            </div>
          </form>
        </main>
      </div>
    </article>
  );
}

export default Ticketing;