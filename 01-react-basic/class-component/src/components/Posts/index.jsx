import { Component } from "react";
import { PostCard } from "../PostCard";
import "./styles.css";

export class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="posts">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            cover={post.cover}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        ))}
      </div>
    );
  }
}
