import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Colour from './Colour/Colour';

class App extends Component {

  state = {
   colour1: 138,
   colour2: 131,
   colour3: 198 
 }


colourCreator = () => {
   return Math.floor(Math.random() * 250) + 1 
}


updateColourHandler = ( event ) => {
  this.setState({
    colour1: this.colourCreator(),
    colour2: this.colourCreator(),
    colour3: this.colourCreator()
  })
}


  render() {
    return (
    <div className="App">
     
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Three / Random Colour Picker</h2>
      </header>
   

      <div className="container">
        <Colour
          clicked={this.updateColourHandler}
          c1={this.state.colour1.toString()}
          c2={this.state.colour2.toString()}
          c3={this.state.colour3.toString()}
        />
        </div>
      </div>

    );
  }
}

export default App;












