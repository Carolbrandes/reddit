import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;

  div {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
