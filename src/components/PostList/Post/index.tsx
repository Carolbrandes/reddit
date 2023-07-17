import * as S from "./styles";
import moment from "moment";
import "moment/dist/locale/pt-br";
import { memo } from "react";

interface Props {
  post: Post;
}

export const Post: React.FC<Props> = memo(({ post }) => {
  const { title, created, author, domain, media } = post;
  const receiveMoment = moment(created).locale("pt-br");
  const hours = receiveMoment.startOf("hour").fromNow();
  const urlImg = media?.oembed?.thumbnail_url;

  return (
    <S.Container data-style="post">
      {urlImg ? (
        <S.BackgroundIMG url={urlImg} />
      ) : (
        <S.Background>Sem Imagem</S.Background>
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
