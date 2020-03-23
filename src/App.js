import React, {Component} from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Seat from './components/Seat/Seat';
import BusStatus from './components/BusStatus/BusStatus';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Ticketing from './components/Ticketing/Ticketing';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route:'signin',
    }
  }

  onRouteChange=(route)=>{
    this.setState({route:route});
  }


  render() {
    
    return (
      <div className="App">
        { this.state.route === 'home' 
        ? 
        <div>
          <Logo onRouteChange={this.onRouteChange}/>
          <Seat/>
          <Ticketing/>
          <BusStatus/>
        </div>
        :(
          this.state.route==='signin' 
          ?
          <div>
            <Signin onRouteChange={this.onRouteChange}/>
          </div>
          :
          <div>
            <Register onRouteChange={this.onRouteChange}/>
          </div>
        )
        }
      </div>
    );
  }
}

export default App;
