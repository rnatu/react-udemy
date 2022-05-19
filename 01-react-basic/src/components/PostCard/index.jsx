import { Component } from "react";

export class PostCard extends Component {
  render() {
    const { cover, title, body } = this.props;

    return (
      <div className="post">
        <img src={cover} alt={title} />
        <div className="post-content">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}
