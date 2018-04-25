import React, { Component } from "react";

class Form extends Component {
  state = {
    title: "",
    description: ""
  };
  render() {
    return (
      <div className="col-sm-4 offset-sm-2">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (this.state.title !== "" && this.state.description !== "") {
              this.props.addTask({
                title: this.state.title,
                description: this.state.description
              });
            } else {
              alert("Введите заголовок и описание");
            }
          }}
        >
          <div className="form-group">
            <label htmlFor="title">Заголовок:</label>
            <input
              id="title"
              className="form-control"
              placeholder="введите заголовок..."
              value={this.state.title}
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Описание:</label>
            <textarea
              id="description"
              className="form-control"
              placeholder="введите описание..."
              value={this.state.description}
              onChange={e => {
                this.setState({ description: e.target.value });
              }}
            />
          </div>
          <div className="form-group text-center">
            <button className="btn">Добавить</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
