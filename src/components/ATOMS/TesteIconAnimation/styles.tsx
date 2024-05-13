import styled from "styled-components";

export const Section = styled.div`
  input {
    display: none;
  }

  label {
    width: 2.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.3rem;
    /* background-color: red; */
  }

  label > div {
    height: 0.3rem;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.azulClaro};
    transition: transform 0.9s, background-color 0.5s, scale 0.5s;
  }
  #icon:checked + label > div:nth-child(1) {
    transform: translateY(191%) rotate(45deg);
  }
  #icon:checked + label > div:nth-child(2) {
    scale: calc(0);
  }
  #icon:checked + label > div:nth-child(3) {
    transform: translateY(-191%) rotate(-45deg);
  }
`;
