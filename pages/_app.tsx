import { useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../styles/global';

// #495C83 #7A86B6 #A8A4CE #C8B6E2
// #0A2647  #144272 #205295 #2C74B3
// #E1DEE1 #758EA8 #473B78 #5E6285 #15111C
// #F2EFEF #689BC6 #362674 #6F729A #17191F

export const lightTheme: DefaultTheme = {
  body: '#F2EFEF',
  text: '#362674',
  toggleBorder: '#F2EFEF',
  background: '#17191F',
}

export const darkTheme: DefaultTheme = {
  body: '#362674',
  text: '#F2EFEF',
  toggleBorder: '#689BC6',
  background: '#6F729A',
}


export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
        <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <button onClick={toggleTheme}>Switch Theme</button>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
