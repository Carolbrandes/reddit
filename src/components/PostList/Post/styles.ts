import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.quartenary};
  padding-top: 0.75rem;
`;

const IMGStyles = `
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 8px;
  margin-right: .81rem;
`;

export const BackgroundIMG = styled.div<{ url?: string }>`
  background: url(${(props) => props.url});
  ${IMGStyles};
`;

export const Background = styled.div`
  background: #a7b0be;
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
