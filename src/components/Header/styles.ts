import styled from 'styled-components'

// STYLES ===
export const HeaderStyles = styled.header`
  padding: 20px;
  height: 10vh;

  .container {
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 30px;
    text-transform: uppercase;
    /* display: block;
    transform: rotate(271deg);
    transform-origin: left; */
    letter-spacing: 5px;
    /* text-align: center; */
    line-height: 1.2;
   /* position: relative;
    bottom: -220px; */
  }
  .first-name {
    letter-spacing: 10px;
  }

  @media (min-width: 720px) {
  }

  @media (min-width: 680px) {
  }
`