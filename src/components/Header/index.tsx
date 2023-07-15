import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import * as S from "./styles";

interface Props {
  toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <S.Container>
      <h1>
        react<span>js</span>
      </h1>
      <S.Switch>
        <Switch
          onChange={toggleTheme}
          checked={theme?.title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#c8cbcf"
          onColor="#FFFB22"
        />
      </S.Switch>
    </S.Container>
  );
};
