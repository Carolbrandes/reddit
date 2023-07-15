import * as S from "./styles";

interface Props {
  post: {
    title: string;
    moment: string;
    user: string;
    domain: string;
    image: string;
  };
}

export const Post: React.FC<Props> = ({ post }) => {
  const { title, moment, user, domain, image } = post;
  return (
    <S.Container data-style="post">
      {image ? <S.BackgroundIMG /> : <S.Background />}

      <div>
        <S.Title>{title}</S.Title>
        <S.Info>
          {moment} <span>{user}</span>
        </S.Info>
        <strong>{domain}</strong>
      </div>
    </S.Container>
  );
};
