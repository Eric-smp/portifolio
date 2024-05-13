import styled from "styled-components";

type TActionHome = {
  modalOpen?: boolean;
};
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
  /* background-color: teal; */

  @media only screen and (min-width: 1024px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 15rem;
    width: 100%;
    height: 100%;
    gap: 6rem;
  }
`;
