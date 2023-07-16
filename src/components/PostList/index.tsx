import { useContext, useState } from "react";
import { ButtonSeeMore } from "../ButtonSeeMore";
import { Loading } from "../Loading";
import { Post } from "./Post";
import * as S from "./styles";
import { useQuery } from "react-query";
import { fetchPosts } from "../../services/fetchPosts";
import { UserContext } from "../../context/globalContext";

interface PostArray {
  0: string;
  1: Post;
}

export const PostList = () => {
  const { selectedButtonFilter }: Context = useContext(UserContext);

  const { data, status } = useQuery(["posts", selectedButtonFilter], () =>
    fetchPosts(selectedButtonFilter || "hot"),
  );
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
        postsToShow?.map((post: PostArray) => (
          <Post key={post[0]} post={post[1]} />
        ))}

      {postsToShow?.length < postsArray?.length && (
        <ButtonSeeMore handleBtnMore={handleBtnMore} />
      )}
    </S.Container>
  );
};
