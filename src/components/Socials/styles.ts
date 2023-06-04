import styled from "styled-components";

export const SocialStyle = styled.div`
    display: none;
    gap: 15px;
    @media (min-width: 540px) {
        gap: 10px;
    }
    @media (min-width: 740px) {
        display: flex;
    }

    svg {
        width: 22px;
        height: 22px;
        transition: transform 0.5s ease-in-out;

        @media (min-width: 540px) {
            width: 20px;
            height: 20px;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
   
`