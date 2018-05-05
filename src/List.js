import React, { Component } from "react";
import { array, func } from "prop-types";

const style = {
  width: "18rem",
  marginBottom: "5px"
};

class List extends Component {
  static propTypes = {
    delTask: func.isRequired,
    tasks: array.isRequired
  };
  render() {
    return (
      <div className="col-sm-4">
        {this.props.tasks.map((item, index) => {
          return (
            <div key={index} className="card" style={style}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button onClick={() => this.props.delTask(index)}>
                  Удалить
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
