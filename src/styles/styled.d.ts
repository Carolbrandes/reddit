import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      terciary: string;

      background: string;
      textv1: string;
      textv2: string;
    };
  }
}
