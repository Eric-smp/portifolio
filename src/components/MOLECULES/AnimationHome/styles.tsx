import styled from "styled-components";

export const AnimationsCss = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    top: -10rem;

    display: flex;
    position: relative;

    .circle {
      border-radius: 50%;
      position: absolute;
      width: 22rem;
      height: 22rem;

      border: 3px dashed ${({ theme }) => theme.colors.azulClaro};

      animation: rotate 38s linear infinite;
      right: 2rem;
    }
    .triangle-svg {
      position: absolute;
      top: 5rem;
      right: 5rem;
      width: 22rem;
      height: 22rem;
      animation: drawTriangle 4s infinite;
    }

    @keyframes drawTriangle {
      0% {
        stroke-dasharray: 0, 700;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 4000, 600;
        stroke-dashoffset: -300;
      }
      100% {
        stroke-dasharray: 0, 600;
        stroke-dashoffset: -600;
      }
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
