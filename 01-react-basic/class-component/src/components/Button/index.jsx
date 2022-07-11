import { Component } from "react";
import "./styles.css";

export class Button extends Component {
  render() {
    const { onClick, disabled } = this.props;

    return (
      <button className="button" disabled={disabled} onClick={onClick}>
        Load more posts
      </button>
    );
  }
}
