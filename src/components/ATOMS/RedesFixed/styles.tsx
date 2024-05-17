import styled from "styled-components";

export const ContentRede = styled.div`
  width: 3rem;
  position: fixed;
  bottom: 0px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  animation: surgir 2s ease-out forwards;
  span {
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      color: #fff;
    }

    :active {
      padding: 0.5rem;
      border: 2px dashed #fff;
      border-radius: 50%;
      /* background-color: red; */
    }
  }

  .diviser {
    position: relative;
    align-content: center;
    width: 0.13rem;
    height: 6rem;
    /* right: -0.7rem; */
    background-color: ${({ theme }) => theme.colors.blueHover};
  }

  @keyframes surgir {
    from {
      opacity: 0;
      transform: translateY(200px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
