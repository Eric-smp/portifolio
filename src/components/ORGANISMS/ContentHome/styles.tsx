import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(300px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const BodyHome = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1.5rem;
  /* animation: ${fadeIn} 2.5s ease-out; */

  @media only screen and (min-width: 1024px) {
    position: relative;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    /* animation: ${fadeIn} 2.5s ease-out; */
    display: flex;
    flex-direction: row;
    padding: 0rem;
  }
`;
