import styled from "styled-components";

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* background-color: red; */
  width: 100%;
  text-align: justify;

  p {
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.8rem;
    text-align: justify;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    text-align: justify;

    p {
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 1.8rem;
      text-align: justify;
    }
  }
`;

export const TitleAboutMy = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blueHover};
`;
