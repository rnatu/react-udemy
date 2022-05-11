import React from "react";

export class PostCard extends React.Component {
  render() {
    const { cover, title, body } = this.props;

    return (
      <div className="post">
        <img src={cover} alt={title} />
        <div className="post-content">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}
