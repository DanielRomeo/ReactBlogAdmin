import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Body, Body2} from './components/Body.js';
import {Header, Header2} from './components/Header.js';
import { Counter } from './components/counter';





class App extends Component{

  add = (a, b)=> a+b;

  render(){
		

    return(
      <div className="app">
        <Header myFunc={this.add} />

		<hr/>
		
		<Counter></Counter>
		
      </div>
    );
  }
}

export default App;
