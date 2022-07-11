import "./styles.css";

import { fecthPosts } from "../../utils/fecthPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useState } from "react";

export const Home = () => {
  const [currentPostsOnPage, setCurrentPostsOnPage] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const postsPerPage = 10;

  const loadPosts = async () => {
    const postAndPhotos = await fecthPosts();

    setCurrentPostsOnPage(postAndPhotos.slice(page, postsPerPage));
    setAllPosts(postAndPhotos);
  };

  useState(() => {
    (async function () {
      await loadPosts();
    })();
  }, []);

  const loadMorePosts = () => {
    const nextPagePosts = page + postsPerPage;
    const nextPosts = allPosts.slice(
      nextPagePosts,
      nextPagePosts + postsPerPage
    );

    setCurrentPostsOnPage((oldState) => [...oldState, ...nextPosts]);
    setPage(nextPagePosts);
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : currentPostsOnPage;

  return (
    <section className="container">
      <div className="search-container">
        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      <div className="notFoundSearch-container">
        {filteredPosts.length === 0 && <p>A busca não teve resultados :( </p>}
      </div>

      <Posts posts={filteredPosts} />

      <div className="button__container">
        {!searchValue && (
          <Button onClick={loadMorePosts} disabled={noMorePosts} />
        )}
      </div>
    </section>
  );
};
