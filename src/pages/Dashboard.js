import React from "react";
import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <p>{`Your name is ${props.userDetails.username}`}</p>
      <p>{`Your account was created on ${props.userDetails.date}`}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    userDetails: state.login.userDetails,
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Dashboard);
