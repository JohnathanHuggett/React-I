import React, { Component } from 'react';

class TodosInput extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      newTodo: ''
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
    return (
      <div>
        {this.state.list.map(item => <div>{item}</div>)}

        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleTodo} placeHolder="Add new todo" value={this.state.newTodo} />

        </form>
      </div>

    );
  }
}


export default TodosInput;