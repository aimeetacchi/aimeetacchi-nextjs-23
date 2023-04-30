import styled from 'styled-components'
import { lighten } from 'polished';

// STYLES ===
export const ButtonStyles = styled.button`
    background-color: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.buttonText};
    transition: all 0.5s ease-in-out;
    border-radius: 5px;
    &:hover {
        background-color: ${({ theme }) => lighten(0.1, theme.button)};
    }
`