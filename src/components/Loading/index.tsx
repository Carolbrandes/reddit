import { useContext } from "react";
import ReactLoading from "react-loading";
import { ThemeContext } from "styled-components";
import * as S from "./styles";

export const Loading = () => {
  const theme = useContext(ThemeContext);
  return (
    <S.Container>
      <ReactLoading type="spinningBubbles" color={theme?.colors.primary} />
    </S.Container>
  );
};
