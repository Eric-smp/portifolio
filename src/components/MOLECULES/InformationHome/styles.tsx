import styled, { keyframes } from "styled-components";

export const ContentInformationHome = styled.div`
  width: 100%;
  position: relative;

  .InformationForMy {
    /* background-color: teal; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    h3 {
      color: ${({ theme }) => theme.colors.blueShadow};
      font-weight: 700;
    }

    .nameAndJob {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h1 {
        font-size: 3rem;
        font-weight: 700;
      }
    }
    b {
      color: ${({ theme }) => theme.colors.blueShadow};
    }

    span {
      width: 100%;
      /* background-color: red; */
      p {
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 1.8rem;
        text-align: justify;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .InformationForMy {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1.5rem;

      h3 {
        color: ${({ theme }) => theme.colors.blueShadow};
        font-weight: 700;
      }

      .nameAndJob {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1 {
          font-size: 3rem;
          font-weight: 700;
        }
      }
      b {
        color: ${({ theme }) => theme.colors.blueShadow};
      }

      span {
        width: 50%;
        p {
          font-weight: 500;
          font-size: 1.1rem;
          line-height: 1.5rem;
          text-align: justify;
        }
      }
    }
  }
`;
