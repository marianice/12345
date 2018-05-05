import React, { Component } from 'react';
import Form from "./Form"
import List from "./List"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
class App extends Component {
  state = {
    tasks: []
  }

  handleSubmit = (data) => {
    const tasks = [ ...this.state.tasks ];
    tasks.push(data);
    this.setState({tasks});
  }
  
  handleDelete= (index) => {
    const tasks = [ ...this.state.tasks ];
    tasks.splice(index,1);
    this.setState({tasks});
  }

  render() {
    return (
      <div className="row">
        <Form addTask={this.handleSubmit}/>
        <List tasks={this.state.tasks} delTask={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
