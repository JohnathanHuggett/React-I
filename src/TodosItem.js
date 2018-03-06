import React, { Component } from 'react';

class TodosItem extends Component {
    constructor(text) {
        super();
        this.text = text;
        this.state = {completed: false};

    }

    getClick = () => {
       this.setState({completed: !this.state.completed});
    }

    render() {
        const styles = this.state.completed ? { textDecoration: 'line-through'} : { textDecoration: 'none'};
        return (
            <div style={this.state.completed ? { textDecoration: 'line-through'} : { textDecoration: 'none'}} onClick={this.getClick}>{this.props.listItem.text}</div>
        );
    }
}

export default TodosItem;
