import { Loading } from "../Loading";
import { Post } from "./Post";
import * as S from "./styles";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch(
    "https://gateway.reddit.com/desktopapi/v1/subreddits/reactjs?rtj=only&redditWebClient=web2x&app=web2x-client-production&include=identity&sort=rising&layout=card"
  );
  return res.json();
};

export const PostList = () => {
  const { data, status } = useQuery("posts", fetchPosts);

  const postsArray = data?.posts && Object.entries(data?.posts);

  return (
    <S.Container data-style="post-list">
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <Loading />}
      {status === "success" &&
        postsArray.map((post: any) => <Post key={post[0]} post={post[1]} />)}
    </S.Container>
  );
};
