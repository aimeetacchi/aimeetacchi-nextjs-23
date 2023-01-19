'use client'
import styled from 'styled-components'

// STYLES ===
export const HeaderStyles = styled.header`
  padding: 10px 20px 0;
  height: 100%;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 5.5px;
    line-height: 1.2;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }

    @media (min-width: 540px) {
      font-size: 30px;
      letter-spacing: 5px;
    }

  }
  
  .first-name {
    letter-spacing: 10px;
  }
`