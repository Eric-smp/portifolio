import styled from "styled-components";

export const ElementHeader = styled.div`
  width: 100%;
  height: 5rem;
  position: fixed;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.blueDetails};
  border-radius: 0% 0% 3% 3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 50;

  h2 {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    gap: 0.4rem;
  }

  .navHeader {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      /* background-color: red; */
      /* justify-content: space-around; */
    }
  }

  .barRigth {
    /* width: 15%; */

    /* width: 5rem; */
    display: flex;

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const spanPerson = styled.span`
  margin-bottom: 0.1rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.azulClaro};
`;

type WrapperModalProps = {
  isVisible: boolean;
};

export const WrapperModal = styled.div<WrapperModalProps>`
  width: 100%;
  height: auto;
  position: absolute;
  top: 5rem;
  z-index: 1;
  /* border-radius: 2rem; */
  right: 0;
  animation: ${({ isVisible }) =>
    isVisible ? "slideIn 0.6s forwards" : "slideOut 0.6s forwards"};
  backdrop-filter: blur(5px);

  @keyframes slideIn {
    from {
      right: -100%;
    }
    to {
      right: 1;
    }
  }

  @keyframes slideOut {
    from {
      right: 0;
    }
    to {
      right: -100%;
    }
  }
`;
