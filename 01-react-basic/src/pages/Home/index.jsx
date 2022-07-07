import "./styles.css";
import { Component } from "react";

import { loadPosts } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

export class Home extends Component /* or React.Component */ {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postAndPhotos = await loadPosts();
    this.setState({
      posts: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPagePosts = page + postsPerPage;
    const nextPosts = allPosts.slice(
      nextPagePosts,
      nextPagePosts + postsPerPage
    );

    // console.log(nextPagePosts, nextPosts);

    this.setState({
      posts: [...posts, ...nextPosts],
      page: nextPagePosts,
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        {searchValue && <h1>Search Value: {searchValue}</h1>}
        <input type="search" onChange={this.handleChange} value={searchValue} />
        <br /> <br />
        <Posts posts={posts} />
        <div className="button__container">
          {!searchValue && (
            <Button onClick={this.loadMorePosts} disabled={noMorePosts} />
          )}
        </div>
      </section>
    );
  }
}
