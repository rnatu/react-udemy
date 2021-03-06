import "./styles.css";
import { Component } from "react";

import { loadPosts } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export class Home extends Component /* or React.Component */ {
  state = {
    currentPostsOnPage: [],
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
      currentPostsOnPage: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, currentPostsOnPage } = this.state;
    const nextPagePosts = page + postsPerPage;
    const nextPosts = allPosts.slice(
      nextPagePosts,
      nextPagePosts + postsPerPage
    );

    // console.log(nextPagePosts, nextPosts);

    this.setState({
      currentPostsOnPage: [...currentPostsOnPage, ...nextPosts],
      page: nextPagePosts,
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { currentPostsOnPage, page, postsPerPage, allPosts, searchValue } =
      this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : currentPostsOnPage;

    return (
      <section className="container">
        <div className="search-container">
          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>

        <div className="notFoundSearch-container">
          {filteredPosts.length === 0 && <p>A busca não teve resultados :( </p>}
        </div>

        <Posts posts={filteredPosts} />

        <div className="button__container">
          {!searchValue && (
            <Button onClick={this.loadMorePosts} disabled={noMorePosts} />
          )}
        </div>
      </section>
    );
  }
}
