import React, { useState } from "react";
import { connect } from "react-redux";
import loginAction from "../reducers/actions/loginAction";

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");

  const login = (username) => {
    setIsLoading(true);
    let payload = { username: username };
    props.loginAction(payload).then((result) => {
      if (result.success) {
        setIsLoading(false);
        props.history.push("/dashboard");
      }
    });
  };

  const handleChange = (e) => {
    return e.target.name === "name" ? setUsername(e.target.value) : () => {};
  };

  const handleClick = (e) => {
    e.preventDefault();
    username.length && login(username);
  };
  return (
    <div className="container">
      <h4>Введите имя</h4>
      <form method="post">
        <input
          type="text"
          value={username}
          name="name"
          onChange={handleChange}
          required
        />
        <button className="pink" onClick={handleClick}>
          {!isLoading ? "Login" : "Loading..."}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userDetails: state.login.userDetails,
  };
};
const mapDispatchToProps = {
  loginAction: loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
