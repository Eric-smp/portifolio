import styled from "styled-components";

export const ContentGlobal = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1.5rem;

  @media only screen and (min-width: 1024px) {
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
