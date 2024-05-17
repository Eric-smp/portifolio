import styled from "styled-components";

export const ContentAbility = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  /* background-color: teal; */
  gap: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blueHover};
  }

  .contentCard {
    display: flex;
  }
`;
