import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { CiDark } from "react-icons/ci";
import { BsSun } from "react-icons/bs";

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
      <S.Switch data-style="switch" theme={theme?.title}>
        <Switch
          className="switch-theme"
          onChange={toggleTheme}
          checked={theme?.title === "dark"}
          checkedIcon={<CiDark size={25} />}
          uncheckedIcon={<BsSun color={theme?.colors.primary} size={20} />}
          height={30}
          width={60}
          onHandleColor={theme?.colors.terciary}
          offHandleColor={theme?.colors.terciary}
          handleDiameter={30}
          offColor="#fff"
          onColor="#999999"
        />
      </S.Switch>
    </S.Container>
  );
};
