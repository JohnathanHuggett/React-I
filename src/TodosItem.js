import React, { Component } from 'react';

class TodosItem extends Component {
    constructor(text) {
        super();
        this.text = text;
        this.state = { clicked: false};
    }

    getClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through'} : { textDecoration: 'none'};
        return (
            <div style={styles} onClick={this.getClick}>{this.props.listItem}</div>
        );
    }
}

export default TodosItem;
