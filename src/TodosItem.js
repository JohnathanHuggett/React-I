import React, { Component } from 'react';

class TodosItem extends Component {
    constructor(text) {
        super();
        this.text = text;
        this.state = { completed: false, x: 'x' };

    }

    getClick = () => {
        this.setState({ completed: !this.state.completed });
    }

    handleXClick = () => {
        this.props.action(this.props.index);
        this.setState({ x: !this.state.x });

    }


    render() {
        return (
            <div className="box">
                <div className="x" style={this.state.x.length > '0' ? { display: 'flex' } : { display: 'none' }} onClick={this.handleXClick}>{this.state.x}</div>
                <div className="text" style={this.state.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} onClick={this.getClick}>{this.props.listItem.text}</div>
            </div>
        );
    }
}

export default TodosItem;
