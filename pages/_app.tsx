import { useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../styles/global';
import { ThemeContainer } from '../styles/sharedstyled';

import {
  Oswald,
  Open_Sans,
} from '@next/font/google';

const oswald700sans = Oswald({
  subsets: ['latin'],
  // this will be the css variable
  variable: '--font-osward700sans',
  weight: "700",
});

const oswald500sans = Oswald({
  subsets: ['latin'],
  // this will be the css variable
  variable: '--font-osward500sans',
  weight: "500",
});

const opensans400sans = Open_Sans({
  subsets: ['latin'],
  // this will be the css variable
  variable: '--font-opensans400sans',
  weight: "400",
});

// #495C83 #7A86B6 #A8A4CE #C8B6E2
// #0A2647  #144272 #205295 #2C74B3
// #E1DEE1 #758EA8 #473B78 #5E6285 #15111C

// #F2EFEF #689BC6 #362674 #6F729A #17191F

export const lightTheme: DefaultTheme = {
  body: '#F2EFEF',
  gradientOne: '#6F729A',
  gradientTwo: '#F2EFEF',
  text: '#362674',
  text2: '#17191F',
  border: '#362674',
  background: '#17191F',
  button: '#362674',
  buttonText: '#F2EFEF',
}

export const darkTheme: DefaultTheme = {
  body: '#362674',
  gradientOne: '#362674',
  gradientTwo: '#17191F',
  text: '#F2EFEF',
  text2: '#689BC6',
  border: '#F2EFEF',
  background: '#689BC6',
  button: '#17191F',
  buttonText: '#F2EFEF',
}


export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
      <>
        <style jsx global>
          {`
             :root {
              --font-oswald700sans: ${oswald700sans.style.fontFamily};
              --font-oswald500sans: ${oswald500sans.style.fontFamily};
              --font-opensans400sans: ${opensans400sans.style.fontFamily};
            }
          `}
        </style>
        <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <ThemeContainer onClick={toggleTheme}>
              {theme === 'dark' ? <MdOutlineLightMode/> : <MdDarkMode/>}
            </ThemeContainer>
            <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
}
