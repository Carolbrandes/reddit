import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  button {
    border: none;
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin-top: 1.5rem;
  }
`;
