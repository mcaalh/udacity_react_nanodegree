import React, { Component } from "react";

export default class ListUsers extends Component {
  render() {
    return (
      <ol>
        {this.props.profiles.map((profile) => {
            const user = this.props.users[profile.userID].name;
            const movie = this.props.movies[profile.favoriteMovieID].name;
          return (
            <li key={profile.id}>
              {`${user}'s favorite movie is ${movie}`}
            </li>
          );
        })}
      </ol>
    );
  }
}
