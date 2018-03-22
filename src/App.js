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
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log(e);
    }

    render() {
        return (
            <div style={{fontSize: 100}} onClick={(e) => this.handleClick(e)}>
                {store.getState().count}
            </div>
        );
    }
}

export default App;
