import styled from 'styled-components'

export const ContentProjects = styled.div`
width: 100%;
display: flex;
flex-direction:    column;
align-items: center;


  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blueHover};
  }

  .projects{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    
  }
`