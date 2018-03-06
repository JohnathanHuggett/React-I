import React from 'react';
import TodosInput from './TodosInput.js';

const styles = {
  background: 'blue',
  textAlign: 'center',
}


const App = () => (
  <div style={styles}>
    <h1>Todo App</h1>
    <TodosInput />
  </div>
);

export default App;
