import React, { useContext } from "react";
import * as S from "./styles";
import { UserContext } from "../../context/globalContext";

interface Props {
  text: string;
  sort: string;
}

export const ButtonFilter: React.FC<Props> = ({ text, sort }) => {
  const { selectedButtonFilter, setSelectedButtonFilter }: Context =
    useContext(UserContext);

  const handleClick = () =>
    setSelectedButtonFilter && setSelectedButtonFilter(sort);

  return (
    <S.Button
      data-style="button-filter"
      isActive={sort == selectedButtonFilter}
      onClick={handleClick}
    >
      {text}
    </S.Button>
  );
};
