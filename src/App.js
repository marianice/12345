import React, { Component } from "react";
import Form from "./Form";
import List from "./List";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    tasks: [],
    loading: false
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });
    fetch("/tasks")
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Произошла ошибка!");
        }
      })
      .then(data => {
        this.setState({ tasks: data, loading: false });
      })
      .catch(error => {
        console.log("ошибка", error.message);
      });
  };
  handleSubmit = data => {
    fetch("/tasks", {
      method: "POST",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error("Произошла ошибка!");
        }
      })
      .then(task => {
        const tasks = [...this.state.tasks];
        tasks.push(task);
        this.setState({ tasks });
      })
      .catch(error => {
        console.log("ошибка", error.message);
      });
  };

  handleDelete = id => {
    fetch(`/tasks/${id}`, {
      method: "DELETE",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          throw new Error("Произошла ошибка!");
        }
      })
      .then(task => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(item => id !== item.id);
        this.setState({ tasks });
      })
      .catch(error => {
        console.log("ошибка", error.message);
      });
  };

  render() {
    return (
      <div className="row">
        <Form addTask={this.handleSubmit} />
        {this.state.loading ? (
          <div className="col-sm-4">
            <div className="alert alert-warning" role="alert">
              Идет загрузка...
            </div>
          </div>
        ) : (
          <List tasks={this.state.tasks} delTask={this.handleDelete} />
        )}
      </div>
    );
  }
}

export default App;
