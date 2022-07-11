import { PostCard } from "../PostCard";
import "./styles.css";

export function Posts({ posts }) {
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
