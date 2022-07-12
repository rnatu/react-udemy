import "./styles.css";

import { fetchPosts } from "../../utils/fetchPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useState, useEffect } from "react";
import { useCallback } from "react";

export function Home() {
  const [currentPostsOnPage, setCurrentPostsOnPage] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const postsPerPage = 10;

  const loadPosts = useCallback(async (postsPerPage) => {
    const postAndPhotos = await fetchPosts();

    setCurrentPostsOnPage(postAndPhotos.slice(0, postsPerPage));
    setAllPosts(postAndPhotos);
  }, []);

  useEffect(() => {
    //   (async function () {
    //     await loadPosts(postsPerPage);
    //   })();
    // }, [loadPosts, postsPerPage]);

    //* Opção sem o await pois não será executado nada após a função loadPosts
    loadPosts(postsPerPage);
  }, [loadPosts, postsPerPage]);

  const handleLoadMorePosts = () => {
    const nextPagePosts = page + postsPerPage;
    const nextPosts = allPosts.slice(
      nextPagePosts,
      nextPagePosts + postsPerPage
    );

    setCurrentPostsOnPage((oldState) => [...oldState, ...nextPosts]);
    setPage(nextPagePosts);
  };

  const handleSearchText = (event) => {
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
        <TextInput
          searchValue={searchValue}
          handleSearchText={handleSearchText}
        />
      </div>

      <div className="notFoundSearch-container">
        {filteredPosts.length === 0 && <p>A busca não teve resultados :( </p>}
      </div>

      <Posts posts={filteredPosts} />

      <div className="button__container">
        {!searchValue && (
          <Button onClick={handleLoadMorePosts} disabled={noMorePosts} />
        )}
      </div>
    </section>
  );
}
