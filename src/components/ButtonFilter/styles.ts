import styled from "styled-components";

export const Container = styled.div<{ isActive?: boolean }>`
  button {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.5rem 6rem;
    color: #fff;
    border: none;
    outline: 0;
    border-radius: 8px;
    background: ${(props) =>
      props.isActive
        ? props.theme.colors.primary
        : props.theme.colors.secundary};
  }
`;