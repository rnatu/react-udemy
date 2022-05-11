import "./App.css";
import { Component } from "react";

import { PostCard } from "./components/PostCard";

class App extends Component /* or React.Component */ {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
    console.log("o");
  }

  loadPosts = async () => {
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photoResponse = fetch("https://jsonplaceholder.typicode.com/photos");
    const [posts, photos] = await Promise.all([postResponse, photoResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postsJson.map((post, index) => {
      return {
        ...post,
        cover: photosJson[index].url,
      };
    });

    this.setState({ posts: postAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={post.cover}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
