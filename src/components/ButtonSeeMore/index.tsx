import addIcon from "../../assets/add.svg";
import * as S from "./styles";

interface Props {
  handleBtnMore: () => void;
}

export const ButtonSeeMore: React.FC<Props> = ({ handleBtnMore }) => {
  return (
    <S.Button onClick={handleBtnMore}>
      <img src={addIcon} alt="icone de mais" />
      Ver Mais
    </S.Button>
  );
};
