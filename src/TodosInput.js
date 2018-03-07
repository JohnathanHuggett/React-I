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
    //todoList.push(this.state.newTodo);
    if (this.state.newTodo !== '') {
      todoList.push({ 'text': this.state.newTodo, 'completed': false })
      this.setState({
        newTodo: '',
        list: todoList
      });
    };
  }

  childFunc = (index) => {
    const todoList = this.state.list;
    todoList.splice(index, 1, 0);
    this.setState({
      list: todoList,
    });
  }

  render() {

    return (
      <div className="list">
        {this.state.list.map((item, i) => <TodosItem key={i} index={i} action={this.childFunc} listItem={item} />)}

        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleTodo} placeholder="Add new todo" value={this.state.newTodo} />
        </form>
      </div>
    );
  }
}


export default TodosInput;