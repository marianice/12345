import React, { Component } from 'react';
import Form from "./Form"
import List from "./List"

class App extends Component {
  state = {
    tasks: []
  }

  handleSubmit = (data) => {
    const tasks = [ ...this.state.tasks ];
    tasks.push(data);
    this.setState({tasks});
  }

  render() {
    return (
      <div className="row">
        <Form addTask={this.handleSubmit}/>
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
