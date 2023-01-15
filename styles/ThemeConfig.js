import { createGlobalStyle} from "styled-components"

// #495C83 #7A86B6 #A8A4CE #C8B6E2
// #0A2647  #144272 #205295 #2C74B3
// #E1DEE1 #758EA8 #473B78 #5E6285 #15111C
// #F2EFEF #689BC6 #362674 #6F729A #17191F

const purple = '#362674';

export const lightTheme = {
  body: '#F2EFEF',
  text: '#362674',
  toggleBorder: '#F2EFEF',
  background: '#17191F',
}

export const darkTheme = {
  body: '#362674',
  text: '#F2EFEF',
  toggleBorder: '#689BC6',
  background: '#6F729A',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`