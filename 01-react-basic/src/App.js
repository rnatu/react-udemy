import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component /* or React.Component */ {
  constructor(props) {
    super(props);
    //binding handlePClick function
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: "Renato Xavier",
      counter: 0,
    };
  }

  handlePClick() {
    this.setState({ name: "Junior" });
  }

  //using arrow function, don't need to using bind
  handleAClick = (e) => {
    e.preventDefault();

    const { counter } = this.state;
    this.setState({ counter: counter + 1 });

    console.log(counter);
  };

  render() {
    const { name } = this.state;
    const { counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} - {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adicionar
          </a>
        </header>
      </div>
    );
  }
}

export default App;
