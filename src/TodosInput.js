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
    //todoList.push(this.state.newTodo);
    todoList.push({ 'text': this.state.newTodo, 'completed': false })
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
<<<<<<< HEAD
    {
      this.state.list.map(obj => {
        return <TodosItem listItem={obj.text} />
      })
    }
=======
        {this.state.list.map(item => <div key={item.text}> <TodosItem listItem={item} /></div>)}
>>>>>>> a9b3800013bef1607c4c5293c07724911b3ff461

    <form onSubmit={this.addTodo}>
      <input type="text" onChange={this.handleTodo} placeholder="Add new todo" value={this.state.newTodo} />
    </form>
      </div >
    );
  }
}


export default TodosInput;