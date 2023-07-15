import React from "react";
import * as S from "./styles";

interface Props {
  text: string;
  isActive?: boolean;
}

export const ButtonFilter: React.FC<Props> = ({ text, isActive }) => {
  return (
    <S.Container data-style="button-filter" isActive={isActive}>
      <button>{text}</button>
    </S.Container>
  );
};
