import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: 0;
  margin: 0.6rem 0;
  border-radius: 8px;
  font-size: 1.25rem;

  img {
    margin-right: 0.5rem;
  }
`;
