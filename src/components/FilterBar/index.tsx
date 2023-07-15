import { ButtonFilter } from "../ButtonFilter";
import * as S from "./styles";

export const FilterBar = () => {
  return (
    <S.Container data-style="filter-bar">
      <div>
        <ButtonFilter text="Hot" isActive />
      </div>
      <div>
        <ButtonFilter text="News" />
      </div>
      <div>
        <ButtonFilter text="Rising" />
      </div>
    </S.Container>
  );
};
