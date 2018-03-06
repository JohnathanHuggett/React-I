import React, { Component } from 'react';

class TodosItem extends Component {
    constructor() {
        super();
<<<<<<< HEAD
        this.text = 'boo',
            this.state = {
                clicked: false,
                text: ''
            };
=======
        this.text = text;
        this.state = {completed: false};

>>>>>>> a9b3800013bef1607c4c5293c07724911b3ff461
    }

    getClick = () => {
       this.setState({completed: !this.state.completed});
    }

    render() {
<<<<<<< HEAD
        const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
=======
        const styles = this.state.completed ? { textDecoration: 'line-through'} : { textDecoration: 'none'};
>>>>>>> a9b3800013bef1607c4c5293c07724911b3ff461
        return (
            <div style={this.state.completed ? { textDecoration: 'line-through'} : { textDecoration: 'none'}} onClick={this.getClick}>{this.props.listItem.text}</div>
        );
    }
}

export default TodosItem;
