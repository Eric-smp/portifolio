import styled from "styled-components";

export const ModalComponent = styled.div`
  width: auto;
  height: auto;
  /* position: absolute; */
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundModal};
  padding: 4rem 1.5rem 1.5rem;
  z-index: 2;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
