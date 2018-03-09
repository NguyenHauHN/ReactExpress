import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {actionCreators} from "./todoListRedux";
import List from './List';
import Input from './Input';
import Title from './Title';

class App extends Component {
  state = {}
  componentWillMount(){
    const {store} = this.props;
    const {todos} = store.getState();
    this.setState({todos});
    this.unsubscribe =  store.subscribe(() => {
      const {todos} = store.getState();
      this.setState({todos});
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  onAddTodo = (text) => {
    const {store} = this.props;
    store.dispatch(actionCreators.add(text));
  };

  onRemoveTodo = (index) => {
    const {store} = this.props;
    store.dispatch(actionCreators.remove(index))
  };

  render() {
    const {todos} = this.state;

    return (
      <div style={styles.container}>
        <Title>To-do List</Title>
        <Input
          placeholder={"Type a to do, then hit Enter!"}
          onSubmitEditing ={this.onAddTodo}
        />
        <List list={todos} onClickItem={this.onRemoveTodo}/>
      </div>

    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default App;
