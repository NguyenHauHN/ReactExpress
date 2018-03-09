import React, {Component} from 'react';
import {createStore} from 'redux';
import logo from './logo.svg';
import './App.css';

// define action type
const types = {
  INCREMENT: 'INCREMENT'
}

// define a reducer
const reducer = (state, action) => {
  if (action.type == types.INCREMENT) {
    return {count: state.count + 1}
  }

  return state
}

// define initial state of store
const initialState = {count: 0}

// define a store
const store = createStore(reducer, initialState)

store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})


class App extends Component {
  render() {
    return (
      <div style={{fontSize: 100}}>
        {store.getState().count}
      </div>
    );
  }
}

export default App;
