import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  {id: 'a', name: 'Devin'},
  {id: 'b', name: 'Gabe' },
  {id: 'c', name: 'Kim'},
]

class List extends Component{
  render(){
    return(
      <div>
        {data.map((item,index) => <div key={index}>{item.name}</div>)}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <List/>
      </div>
    );
  }
}

export default App;
