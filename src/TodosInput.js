import React, { Component } from 'react';
import TodosItem from './TodosItem'


class TodosInput extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      newTodo: new TodosItem()

    };
  }

  handleTodo = (event) => {
    this.setState({
      newTodo: {
        text: event.target.value
      }
    });
  };

  addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.list;
    todoList.push(this.state.newTodo);
    this.setState({
      // newTodo: '',
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
        {this.state.list.map(obj => {
          return <TodosItem listItem={obj.text} />
        })}

        <form onSubmit={this.addTodo}>
          <input type="text" onChange={this.handleTodo} placeholder="Add new todo" value={this.state.newTodo} />
        </form>
      </div>
    );
  }
}


export default TodosInput;