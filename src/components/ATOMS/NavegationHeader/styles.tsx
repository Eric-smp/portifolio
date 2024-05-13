import styled from "styled-components";

export const NavHeaderDesktop = styled.nav`
  display: flex;
  gap: 1.5rem;
  height: 100%;
  width: auto;
  /* background-color: teal; */
`;

export const FadeInH2 = styled.h2`
  animation: fadeIn 0.3s ease-in-out;
  opacity: 0;
  animation-fill-mode: forwards;
  transform: translateY(-20px);
  cursor: pointer;
  filter: none;

  &:hover {
    color: ${({ theme }) => theme.colors.azulClaro};
    filter: drop-shadow(1px 1px 20px ${({ theme }) => theme.colors.azulClaro});
    transition: 1s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NavBarMobile = styled.nav`
  display: flex;
  /* height: 10rem; */
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;

    .divider {
      background-color: ${({ theme }) => theme.colors.azulClaro};
      /* color: red; */
    }
  }
`;
