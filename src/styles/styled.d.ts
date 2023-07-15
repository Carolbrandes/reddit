import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary?: string;
      secundary?: string;

      background?: string;

      textv1?: string;
      textv2?: string;
      textv3?: string;

      textButton?: string;
    };
  }
}
