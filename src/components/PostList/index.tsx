import { useContext, useMemo, useState } from "react";
import { ButtonSeeMore } from "../ButtonSeeMore";
import { Loading } from "../Loading";
import { Post } from "./Post";
import * as S from "./styles";
import { useQuery } from "react-query";
import { fetchPosts } from "../../services/fetchPosts";
import { UserContext } from "../../context/globalContext";

interface PostData {
  data: Post;
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

  console.log("data fetch =>", data);

  const postsArray = useMemo(() => data?.data?.children, [data]);

  const postsToShow = postsArray?.slice(0, numberPostsToShow);

  return (
    <S.Container data-style="post-list">
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <Loading />}
      {status === "success" &&
        postsToShow?.map((post: PostData) => (
          <Post key={post?.data?.id} post={post?.data} />
        ))}

      {postsToShow?.length < postsArray?.length && (
        <ButtonSeeMore handleBtnMore={handleBtnMore} />
      )}
    </S.Container>
  );
};
