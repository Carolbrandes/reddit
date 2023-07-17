import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.quartenary};
  padding: 0.75rem 0 1rem 0;
`;

const IMGStyles = `
  min-width: 4.8rem;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 8px;
  margin-right: 13px;
`;

export const BackgroundIMG = styled.div<{ url?: string }>`
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;

  ${IMGStyles};
`;

export const Background = styled.div`
  background: #a7b0be;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  ${IMGStyles};
`;

export const Info = styled.p`
  color: ${(props) => props.theme.colors.quartenary};

  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Title = styled.h4`
  font-size: 1.25rem;
`;
