import React, { Component } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import Corona from './components/Corona'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>

      // <div>
      //   < Corona/>
      // </div>
    )
  }
}
export default App