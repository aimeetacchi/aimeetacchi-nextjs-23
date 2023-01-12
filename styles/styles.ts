import styled from "styled-components";

export const HomeStyle = styled.div`
    
    
    @media (min-width: 520px) {
        /* padding: 5em 0; */
    }

    @media (min-width: 640px) {
        font-size: 1.5rem;
    }

    .home-intro {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90vh;
    }
    .home-title {
        font-size: 70px;
        color: #fff;
        background: linear-gradient(271deg,#a0e9ff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -1.5px;
        line-height: 110%;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    .flex-container {
        gap: 20px;

        @media (min-width: 640px) {
            display: flex;
        }
    }

`