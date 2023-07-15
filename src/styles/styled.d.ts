import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      terciary: string;
      quartenary: string;

      background: string;
      text: string;
    };
  }
}
