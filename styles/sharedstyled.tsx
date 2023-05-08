import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`

const ThemeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  position: relative;

  @media (min-width: 1350px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  svg {
    display: block;
    width: 25px;
    height: 25px;
    position: absolute;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }

    @media (min-width: 1350px) {    
      right: 0;
    }
  }
`
const Button = styled.a`
  display: block;
  padding: 10px 0;
  color: ${({ theme }) => theme.text};
  border: 3px solid ${({ theme }) => theme.background};
  width: 100%;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 16px;
  border-radius: 20px;
  transition: all 0.5s ease-out;

  &:hover {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.background};
  }

  @media (min-width: 520px) {
    width: 300px;
  }
`

const SingleProject = styled.div`
  padding: 10px;

  @media (min-width: 1350px) {
    max-width: 1200px;
    margin: 0 auto;
  }

`

export { Container, ThemeContainer, Button, SingleProject }