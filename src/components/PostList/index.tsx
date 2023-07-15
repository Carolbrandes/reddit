import { useState } from "react";
import { ButtonSeeMore } from "../ButtonSeeMore";
import { Loading } from "../Loading";
import { Post } from "./Post";
import * as S from "./styles";
import { useQuery } from "react-query";

interface PostArray {
  0: string;
  1: {
    title: string;
    created: string;
    author: string;
    domain: string;
    thumbnail: {
      url: string;
    };
  };
}

const fetchPosts = async () => {
  const res = await fetch(
    "https://gateway.reddit.com/desktopapi/v1/subreddits/reactjs?rtj=only&redditWebClient=web2x&app=web2x-client-production&include=identity&sort=rising&layout=card"
  );
  return res.json();
};

export const PostList = () => {
  const { data, status } = useQuery("posts", fetchPosts);
  const postsPorPage = 5;
  const [numberPostsToShow, setNumberPostsToShow] = useState(postsPorPage);

  const handleBtnMore = () =>
    setNumberPostsToShow((oldNumber) => oldNumber + postsPorPage);

  const postsArray = data?.posts && Object.entries(data?.posts);

  const postsToShow = postsArray?.slice(0, numberPostsToShow);

  return (
    <S.Container data-style="post-list">
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <Loading />}
      {status === "success" &&
        postsToShow.map((post: PostArray) => (
          <Post key={post[0]} post={post[1]} />
        ))}

      {postsToShow?.length < postsArray?.length && (
        <ButtonSeeMore handleBtnMore={handleBtnMore} />
      )}
    </S.Container>
  );
};
