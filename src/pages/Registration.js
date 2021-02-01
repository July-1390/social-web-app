import React, { Component } from "react";

import { Link } from "react-router-dom";

class Registration extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="center">Введите имя</h4>
        <form name="form">
          <input type="text" name="user" />
        </form>
        <div>
          <Link to="/postsline">
            <button type="submit" className="btn grey">
              Продолжить
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default Registration;
