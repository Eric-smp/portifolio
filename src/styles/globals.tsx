import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
`;

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
}
h1,h2,h3,h4,h5,h6,p,a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Roboto", sans-serif;
    font-weight: 300;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #333;
}

`;
