import styled, { keyframes } from "styled-components";

type TActionHome = {
  modalOpen?: boolean;
};

export const fadeIn = keyframes`
from { opacity: 0; transform: translateY(150px); }
to { opacity: 1; transform: translateY(0); }
`;

export const WrapperHome = styled.div<TActionHome>`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;


 

  background-color: ${({ theme }) => theme.colors.background};
  /* filter: ${({ modalOpen }) => (modalOpen ? "blur(8px)" : "none")}; */
`;



export const Componentes = styled.div`
  /* top: 0rem; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  /* overflow-y: auto; */
  gap: 15rem;
  /* padding-top: 15rem; */
/* background-color: teal;   */
  
  /* background-color: red; */
  
  div {
    opacity: 1;
    transition: opacity 3s ease-in-out;
    /* gap: 15rem; */

    &.animate {
      display: flex;
      justify-content: center;
      width: 100%;
      opacity: 0; // Inicia invisível
      animation: ${fadeIn} 1s ease-out forwards;
    }
  }

  @media only screen and (min-width: 1024px) {
    position: relative;
    top: 15rem;
    width: 100%;
    height: 100%;
    gap: 15rem;
  }

  @media only screen and (min-width: 1600px) {
    position: relative;
    top: 21rem;
    width: 100%;
    height: 100%;
    gap: 20rem;

  }
`;