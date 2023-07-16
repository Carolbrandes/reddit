import { ButtonFilter } from "../ButtonFilter";
import * as S from "./styles";

export const FilterBar = () => {
  return (
    <S.Container data-style="filter-bar">
      <div>
        <ButtonFilter text="Hot" sort="hot" />
      </div>
      <div>
        <ButtonFilter text="News" sort="new" />
      </div>
      <div>
        <ButtonFilter text="Rising" sort="rising" />
      </div>
    </S.Container>
  );
};
