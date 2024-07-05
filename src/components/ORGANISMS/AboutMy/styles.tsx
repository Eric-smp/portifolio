import styled, { keyframes } from "styled-components";
import Image from "next/image";
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type ImageProps = {
  width?: string;
  height?: string;
}

export const ContentAboutMy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: 3rem;


  .contentImage {
    /* background-color: red; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* padding: 0.5rem; */
    border-radius: 50%;
    /* border: 2px dashed ${({ theme }) => theme.colors.blueHover}; */
    /* animation: ${rotateAnimation} 2s linear infinite; */
    .border {
      position: absolute;
      top: 0;
      left: 5;
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      border: 2px dashed ${({ theme }) => theme.colors.azulClaro};
      animation: ${rotateAnimation} 50s linear infinite;
    }

    
  }

  @media only screen and (min-width: 1024px) {
      width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;


  .contentImage {
    position: relative;
    display: flex;
    padding: 0.5rem;
    border-radius: 50%;
    /* border: 2px dashed ${({ theme }) => theme.colors.blueHover}; */
    /* animation: ${rotateAnimation} 2s linear infinite; */
    .border {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px dashed ${({ theme }) => theme.colors.azulClaro};
      animation: ${rotateAnimation} 50s linear infinite;
    }

    img {
      /* position: absolute; */
      filter: drop-shadow(1px 1px 0.5px ${({ theme }) => theme.colors.azulClaro});
    }
  }
  }
`;


export const ImagePerfil = styled.img<ImageProps>`
width: ${({ width }) => width ? width : '300px'};
`