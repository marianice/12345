import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form style={{ width: "300px" }}>
        <div className="form-group">
          <label htmlFor="title">Заголовок:</label>
          <input
            id="title"
            className="form-control"
            placeholder="введите заголовок..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Описание:</label>
          <textarea
            id="description"
            className="form-control"
            placeholder="введите описание..."
          />
        </div>
        <div className="form-group text-center">
          <button className="btn">Добавить</button>
        </div>
      </form>
    );
  }
}

export default Form;
