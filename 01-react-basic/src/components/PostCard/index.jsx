import { Component } from "react";
import "./styles.css";

export class PostCard extends Component {
  render() {
    const { cover, title, body, id } = this.props;

    return (
      <div className="post">
        <img src={cover} alt={title} />
        <div className="post-content">
          <h2>
            {title} - {id}
          </h2>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}
