import styled from "styled-components";

export const FooterStyle = styled.footer`
    font-size: 14px;
    text-align: center;
    padding: 3em 2em;
    @media (min-width: 520px) {
        padding: 2em 0;
    }
    @media (min-width: 640px) {
        font-size: 12px;
    }

    .footer-socials-container {
        margin-top: 10px;
        div {
            justify-content: center;

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`