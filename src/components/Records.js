import React, { Component } from "react";
import Record from "./Record";
import Basic from "../Demo/Basic";
import PropTypes from "prop-types";

//增加一个jquery
import { getJSON } from "jquery";

import axios from "axios";

import * as TODOSAPI from "../utils/TodosAPI";

import RecordsForm from "./RecordsForm";

class Records extends Component {
  constructor(props) {
    super(props);

    //初使化状态
    this.state = {
      error: null,
      isLoad: false,
      todos: []
    };
  }

  //生命周期
  componentDidMount() {
    axios
      .get(TODOSAPI.api)
      .then(response =>
        this.setState({
          todos: response.data,
          isLoad: true
        })
      )
      .catch(error =>
        this.setState({
          isLoad: true,
          error
        })
      );
  }

  render() {
    const { error, isLoad, todos } = this.state;

    if (error) {
      return <div>ERROR: {error.message}</div>;
    } else if (!isLoad) {
      return <div style={{ color: "red" }}>isLoad.....</div>;
    } else {
      return (
        <div>
          <h2>React Account System</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Data</th>
                <th>Title</th>
                <th>Account</th>
              </tr>
            </thead>
            <tbody>
              {/* {this.state.todos.map((record,i) => <Record key={i} record={record}/>)} */}
              {this.state.todos.map((record, i) => (
                <Record key={i} {...record} />
              ))}
            </tbody>
          </table>
          <RecordsForm />
        </div>
      );
    }
    <Basic />;
  }
}

export default Records;
