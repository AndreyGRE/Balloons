import React, {Component} from 'react';
import './App.css';
import Pole from './Pole';
import './Puz/puz'
export default class App extends Component {
 
  render(){
  
  return (
    <>
      <div className="App">
        <header className="Puz">
        </header>
        <Pole
        a={90}
        /> 
        </div>
    </>
  );
 }
}
