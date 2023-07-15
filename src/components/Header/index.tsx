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
    <S.Container data-style="header">
      <h1>
        react<span>js</span>
      </h1>
      <S.Switch data-style="switch">
        <Switch
          className="switch-theme"
          onChange={toggleTheme}
          checked={theme?.title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={30}
          width={60}
          onHandleColor={theme?.colors.terciary}
          offHandleColor={theme?.colors.terciary}
          handleDiameter={30}
          offColor="#ffffff"
          onColor="#FFFB22"
        />
      </S.Switch>
    </S.Container>
  );
};
