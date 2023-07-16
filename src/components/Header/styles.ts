import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  position: relative;
  margin-bottom: 1rem;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;

    span {
      color: ${(props) => props.theme.colors.terciary};
    }
  }
`;

export const Switch = styled.div<{ theme?: string }>`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);

  svg {
    position: relative;
    top: ${(props) => (props.theme == "dark" ? "2px" : "4px")};
    left: 5px;
  }
`;
