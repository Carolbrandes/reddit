import { Post } from "./Post";
import * as S from "./styles";

export const PostList = () => {
  const posts = [
    {
      title: "titulo do post",
      moment: "enviado há 6 horas por",
      user: "usuário_nickname",
      domain: "dominio.io",
      image: "",
    },
  ];
  return (
    <S.Container data-style="post-list">
      {posts.map((post) => (
        <Post key={post.moment} post={post} />
      ))}
    </S.Container>
  );
};
