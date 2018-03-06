import React, { Component } from 'react';
import TodosItem from './TodosItem'


class TodosInput extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      newTodo: '',
    };
  }

  handleTodo = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  };

  addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.list;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      list: todoList
    });
  };

  render() {
    const styles = {
      color: 'white',
      fontSize: 25,
    }
    return (
      <div style={styles}>
        {this.state.list.map(item => <TodosItem listItem={item} />)}

        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleTodo} placeHolder="Add new todo" value={this.state.newTodo} />
        </form>
      </div>
    );
  }
}


export default TodosInput;