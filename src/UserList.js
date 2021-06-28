import React, { Component } from "react";

class UserList extends Component {
  render() {
    const { users, usersWhoLikedMovie } = this.props;
    if (!usersWhoLikedMovie || usersWhoLikedMovie === 0) {
      return <p> None of the current users liked this movie.</p>;
    }
    
    const listofUsers = usersWhoLikedMovie.map(id => (
      <li key={id}>
      	<p>{users[id].name}</p>
	  </li>
	));

	return <ul>{listofUsers}</ul>;
  }
}

export default UserList;
    