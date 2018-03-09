import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './List';
import './Input';
import './Title';
import Title from "./Title";
import Input from "./Input";
import List from "./List";

class App extends Component {
  state = {
    todos: ['Click to remove', 'Learn React', 'Write code', 'Ship App']
  };

  onAddTodo = (text) => {
    const {todos} = this.state;

    this.setState({todos: [text, ...todos]});
  };

  onRemoveTodo = (index) => {
    const {todos} = this.state;
    this.setState ({
      todos: todos.filter((todo, i) => i !== index)
    });
  };

  render() {
    const {todos} = this.state;
    return (
      <div style={styles.container}>
        <Title>
          To-do List
        </Title>
        <Input
          placeholder={"Type a todo, then hit enter!"}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list ={todos}
          onClickItem={this.onRemoveTodo}
        />
      </div>
    );
  }
}

const styles = {
  container:{
    display: 'flex',
    flexDirection: 'column'
  }
};

export default App;
