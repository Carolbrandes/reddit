import addIcon from "../../assets/add.svg";
import * as S from "./styles";

export const ButtonSeeMore = () => {
  return (
    <S.Button>
      <img src={addIcon} alt="icone de mais" />
      Ver Mais
    </S.Button>
  );
};
