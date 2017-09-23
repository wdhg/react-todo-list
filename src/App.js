import React, { Component } from 'react';
import './App.css';

class TodoItems extends Component {
  createEntry(entry) {
    return (
      <li className='todo-item'
          onClick={() => this.props.removeEntry(entry)} 
          key={entry.key}>
        {entry.value}
      </li>
    );
  }

  render() {
    return (
      <ul>
        {this.props.entries.map((e) => this.createEntry(e))}
      </ul>
    );
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let entries = this.state.entries;
    entries.push({
      value: this._inputElement.value,
      key: Date.now()
    });
    this.setState({
      entries: entries,
    });
    this._inputElement.value = '';
  }

  removeEntry(entry) {
    this.setState({
      entries: this.state.entries.filter((x) => x !== entry),
    });
  }

  render() {
    return (
      <div className='todo-app'>
        <div className='todo-input'>
          <h1>Todo List</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input ref={(a) => this._inputElement = a}/>
            <input type='submit' value='Add' />
          </form>
        </div>
        <TodoItems className='todo-items' removeEntry={(e) => this.removeEntry(e)} entries={this.state.entries} />
      </div>
    );
  }
}

export default TodoList;