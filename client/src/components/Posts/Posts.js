import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("/posts", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ posts: response.posts }))
      .catch(error => this.setState({ message: error.message }));

    // // fetch("/admin", {
    // //   headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    // // })
    // //   .then(response => {
    // //     if (response.ok) return response.json();
    // //     throw new Error("Network response was not ok.");
    // //   })
    // //   .then(response => console.log(response))
    // //   .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return (
      <ul>
        {this.state.posts.map(post => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    );
  }
}

export default Posts;
