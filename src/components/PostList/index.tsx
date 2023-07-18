import { useContext, useEffect, useMemo, useState } from "react";
import { ButtonSeeMore } from "../ButtonSeeMore";
import { Loading } from "../Loading";
import { Post } from "./Post";
import * as S from "./styles";
import { useQuery } from "react-query";
import { api } from "../../services/api";
import { UserContext } from "../../context/globalContext";

interface PostData {
  data: Post;
}

export const PostList = () => {
  const { selectedButtonFilter }: Context = useContext(UserContext);

  const { data, status } = useQuery(["posts", selectedButtonFilter], () =>
    api.get(`/r/react/${selectedButtonFilter || "hot"}`),
  );

  const postsPorPage = 8;
  const [numberPostsToShow, setNumberPostsToShow] = useState(postsPorPage);

  const [postsToShow, setPostsToShow] = useState([]);

  const handleBtnMore = () =>
    setNumberPostsToShow((oldNumber) => oldNumber + postsPorPage);

  const postsArray = useMemo(() => data?.data?.data?.children, [data]);

  useEffect(() => {
    setNumberPostsToShow(postsPorPage);
  }, [selectedButtonFilter]);

  useEffect(() => {
    setPostsToShow(postsArray?.slice(0, numberPostsToShow));
  }, [numberPostsToShow, selectedButtonFilter, postsArray]);

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
