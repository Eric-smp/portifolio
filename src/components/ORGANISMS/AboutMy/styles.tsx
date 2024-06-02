import styled from "styled-components";

export const ContentAboutMy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
justify-content: space-between;

.contentImage{
  display: flex;
  padding: 0.5rem;
  /* width: 100%; */
  /* background-color: red; */
  border-radius: 50%;
  border: 2px dashed ${({ theme }) => theme.colors.blueHover};
}
  /* background-color: red; */
  /* animation: aparecer 1s ease-out;

  @keyframes aparecer {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  } */
`;
