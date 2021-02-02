import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class PostsLine extends Component {
  render() {
    // console.log(this.props.user);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container">
        <h4>All posts here</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const user = state.login.userDetails;
  const userPosts = user
    ? state.posts.filter((p) => p.userId === user._id)
    : state.posts;

  console.log(user);
  console.log(state.posts);
  console.log(userPosts);
  return {
    userDetails: state.login.userDetails,
    posts: userPosts,
  };
};

export default connect(mapStateToProps)(PostsLine);
