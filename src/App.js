import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import List from './List';
import Input from './Input';
import {actionCreators} from "./todoListRedux";


const mapStateToProps = (state) => ({todos: state.todos});

class App extends Component {

    onAddTodo = (text) => {
        const {dispatch} = this.props;

        dispatch(actionCreators.add(text));
    }

    onRemoveToto = (index) => {
        const {dispatch} = this.props;

        dispatch(actionCreators.remove(index));
    }

    render() {
        const {todos} = this.props;
        return (
            <div className="App">
                <Title children={"Todo List"}/>
                <Input
                    placeholder={"Type a todo, then hit Enter"}
                    onSubmmitEditing={this.onAddTodo}
                />
                <List list={todos} onClickItem={this.onRemoveToto}/>
            </div>
        );
    }
}

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
};


export default connect(mapStateToProps)(App);
