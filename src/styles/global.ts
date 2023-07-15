import { createGlobalStyle } from "styled-components";

const fontPrimary = `
  font-family: 'Mulish', sans-serif;  
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
        font-size: 93.75%;   /* 15px */
    }

    @media (max-width: 720px){
        font-size: 87.5%; /* 14px */
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.textv1};
    ${fontPrimary};
    font-weight: 400;
     -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${fontPrimary};
    font-weight: 400; 
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
