import React, {Component} from 'react';
import {createStore} from 'redux';
import './App.css';
import {reducer} from "./redux-minimal";
import {initialState} from "./redux-minimal";

// create store, pass initialState and reducer
const store = createStore(reducer, initialState);

// dispatch action with store
store.dispatch({type: 'INCREMENT'});

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
