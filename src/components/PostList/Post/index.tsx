import * as S from "./styles";
import moment from "moment";
import "moment/dist/locale/pt-br";
import { memo } from "react";

interface Props {
  post: Post;
}

export const Post: React.FC<Props> = memo(({ post }) => {
  const { title, created, author, domain, thumbnail } = post;
  const receiveMoment = moment(created).locale("pt-br");
  const hours = receiveMoment.startOf("hour").fromNow();

  return (
    <S.Container data-style="post">
      {thumbnail?.url?.match(/(.jpg|.png|.gif)/) ? (
        <S.BackgroundIMG url={thumbnail?.url} />
      ) : (
        <S.Background />
      )}

      <div>
        <S.Title>{title}</S.Title>
        <S.Info>
          enviado {hours} por <span>{author}</span>
        </S.Info>
        <strong>{domain}</strong>
      </div>
    </S.Container>
  );
});
