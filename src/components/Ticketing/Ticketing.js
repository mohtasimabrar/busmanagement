import React from 'react';

function Ticketing() {
  return (
    <article class="cf mt3 white status">
      <div class="fl w-50 tl pl5">
        <article class="pl3 pb3 pr3 pa5-ns" data-name="slab-stat">
          <h1 className='f1'>Ticket Status</h1>
          <div>
            <dl class="dib mr5">
              <dd class="f5 f5-ns b ml0">Ticket Number</dd>
              <dd class="f3 f2-ns b ml0">112244</dd>
            </dl>
            <dl class="dib mr5">
              <dd class="f5 f5-ns b ml0">Location</dd>
              <dd class="f3 f2-ns b ml0">Abdullahpur</dd>
            </dl>
          </div>
          <div> 
            <dl class="dib mr5">
              <dd class="f5 f5-ns b ml0">Date</dd>
              <dd class="f3 f2-ns b ml0">10-03-2020</dd>
            </dl>
            <dl class="dib mr5">
              <dd class="f5 f5-ns b ml0">Time</dd>
              <dd class="f3 f2-ns b ml0">5 PM</dd>
            </dl>
            <dl class="dib mr5">
              <dd class="f5 f5-ns b ml0">Payment Confirmation</dd>
              <dd class="f3 f2-ns b ml0">NO</dd>
            </dl>
          </div>
        </article>
      </div>
      <div class="fl w-50 bg-light-gray tr m5 shadow-5">
        <main class="pa4 black-80">
          <form class="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend class="f3 b fw6 ph0 mh0">Purchase Ticket</legend>
                <div class="mt3">
                  <label class="db fw6 lh-copy f6" for="email-address">ID</label>
                  <input class="pa2 input-reset ba bg-transparent w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div class="mv3">
                  <label class="db fw6 lh-copy f6" for="password">Password</label>
                  <input class="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"  id="password"/>
                </div>
                <div class="mt3">
                  <label class="db fw6 lh-copy f6" for="cars">Choose Location</label>
                    <select className='b pa2 input-reset ba b--black bg-transparent w-100'id="cars" name="carlist" form="carform">
                    <option value="volvo">Abdullahpur</option>
                    <option value="saab">Mirpur-1</option>
                    <option value="opel">Zigatola</option>
                    <option value="audi">Jatrabari</option>
                  </select>
                </div>
              </fieldset>
            <div class="">
              <p className='b ph3 pv2 dib bg-transparent f5'>BDT 50</p>
              <a class="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue mt2" href="#0">Purchase</a>
            </div>
          </form>
        </main>
      </div>
    </article>
  );
}

export default Ticketing;