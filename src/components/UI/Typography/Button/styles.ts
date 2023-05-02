import styled from 'styled-components'
import { lighten } from 'polished';

// STYLES ===
export const ButtonStyles = styled.button`
    background-color: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.buttonText};
    /* transition: all 0.5s ease-in-out; */
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    padding: 0 15px;
    line-height: 1.15;
    font-size: 14px;
    height: 36px;
    word-spacing: 0px;
    letter-spacing: .0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    min-width: 64px;
    border: 1px solid  ${({ theme }) => theme.gradientOne};
    text-align: center;
    transition: background 280ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background-color: ${({ theme }) => lighten(0.1, theme.button)};
    }

    svg {
        display: inline-block;
    }
                
`