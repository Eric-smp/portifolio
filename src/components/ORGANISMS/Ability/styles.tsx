import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContentAbility = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: teal; */
  gap: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blueHover};
  }

  .contentCard {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    /* background-color: red; */
  }

  
.contentCard > * {
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

@media only screen and (min-width: 1024px){
    width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: teal; */
  gap: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blueHover};
  }

  .contentCard {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  
.contentCard > * {
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
} 


`;
