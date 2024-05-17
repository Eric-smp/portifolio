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

  .contentPage {
    top: 8rem;
    position: relative;
    /* background-color: red; */
  }
`;

export const WrapperContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 7rem;
  width: 100%;
  height: 100%;
  gap: 10rem;
  /* background-color: teal; */
  padding-bottom: 3rem;

  div {
    opacity: 1;
    transition: opacity 2s ease-in-out;

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
    /* padding-bottom: 30rem; */
  }
  @media only screen and (min-width: 1600px) {
    position: relative;

    top: 21rem;
    width: 100%;
    height: 100%;
    gap: 20rem;
    padding-bottom: 10rem;
  }
`;
