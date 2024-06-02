import styled from "styled-components";

export const CardAbility = styled.div`
  width: 5rem;
  height: auto;
  padding: 1.5rem;
  border-radius: 15px 0px;
  background-color: ${({ theme }) => theme.colors.backgroundModal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.blueDetails};

  span{
    width: 3rem;
   

    fill: ${({ theme }) => theme.colors.blueDetails};
    
  }
  

`;
