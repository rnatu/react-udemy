import "./App.css";
import { Component } from "react";

class App extends Component /* or React.Component */ {
  state = {
    posts: [
      {
        id: 1,
        title: "O título 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        title: "O título 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "O título 3",
        body: "O corpo 3",
      },
    ],
    counter: 0,
  };

  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    console.log("Componente atualizado");
    this.handleTimeOut();
  }

  componentWillUnmount() {
    clearTimeout(this.handleTimeOut);
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = "Novo titulo";

    setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 2000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
