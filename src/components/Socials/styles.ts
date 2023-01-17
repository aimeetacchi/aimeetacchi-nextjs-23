import styled from "styled-components";

export const SocialStyle = styled.div`
    display: flex;
    gap: 15px;
    @media (min-width: 540px) {
        gap: 10px;
    }

    svg {
        width: 22px;
        height: 22px;
        transition: transform 0.5s ease-in-out;

        @media (min-width: 540px) {
            width: 30px;
            height: 30px;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
   
`