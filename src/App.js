import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import List from './List';
import Input from './Input';
import {actionCreators} from "./todoListRedux";

class App extends Component {
    state = {};

    componentWillMount() {
        const {store} = this.props;

        const {todos} = store.getState();
        this.setState({todos});

        this.unsubscribe = store.subscribe(() => {
            const {todos} = store.getState();
            this.setState({todos});
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onAddTodo = (text) => {
        const {store} = this.props;
        store.dispatch(actionCreators.add(text));
    }

    onRemoveTodo = (index) => {
        const {store} = this.props;
        store.dispatch(actionCreators.remove(index));
    }

    render() {
        const {todos} = this.state;
        return (
            <div style={style.container}>
                <Title>
                    To-Do List
                </Title>
                <Input placeholder={'Type a todo, then hit enter!'} onSubmitEditing={this.onAddTodo}>

                </Input>

                <List list={todos} onClickItem={this.onRemoveTodo}>

                </List>

            </div>
        );
    }
}

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        margin: '10px auto'
    }
};

export default App;
