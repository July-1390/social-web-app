import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class PostsLine extends Component {
  // state = {
  //   posts: [],
  // };
  // componentDidMount() {
  //   //go out and grab the data
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts") //get some data
  //     .then((res) => {
  //       this.setState({
  //         posts: res.data.slice(0, 10),
  //       });
  //     });
  // }

  render() {
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
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(PostsLine);
