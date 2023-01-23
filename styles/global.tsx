import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    /* background: ${({ theme }) => theme.gradientOne}; */
    background: linear-gradient(0deg, ${({ theme }) => theme.gradientOne} 3.6%, ${({ theme }) => theme.gradientTwo} 90.4%);
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(0deg, ${({ theme }) => theme.gradientTwo} 3.6%, ${({ theme }) => theme.gradientOne} 90.4%);
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .alice-carousel__dots {
    margin-top: 5px;
  }
`

export default GlobalStyle