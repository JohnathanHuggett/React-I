import React, { Component } from 'react';

class TodosItem extends Component {
    constructor() {
        super();
        this.text = 'boo',
            this.state = {
                clicked: false,
                text: ''
            };
    }

    getClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
            <div style={styles} onClick={this.getClick}>{this.props.listItem}</div>
        );
    }
}

export default TodosItem;
