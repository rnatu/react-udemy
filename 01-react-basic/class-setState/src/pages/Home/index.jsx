import "./styles.css";
import { Component } from "react";

export class Home extends Component /* or React.Component */ {
  state = {
    counter: 0,
  };

  handleIncrement = () => {
    this.setState(
      (prevState, prevProps) => {
        console.log("prevState", prevState.counter);
        console.log("prevProps", prevProps.numberToIncrement);
        return { counter: prevState.counter + 1 };
      },
      () => {
        console.log("postState", this.state.counter);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
