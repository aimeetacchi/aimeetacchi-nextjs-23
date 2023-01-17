import styled from "styled-components";

export const HomeStyle = styled.div`
    @media (min-width: 640px) {
        font-size: 1.5rem;
    }
    .home-welcome {
        height: 85vh;
        padding: 0 20px;
    }
    .home-intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100%;

        @media (min-width: 840px) {
            width: 50%;
            text-align: left;
        }
    }
    .home-title {
        font-size: 60px;
        color: #fff;
        background: linear-gradient(271deg,#5aafff 30%,#a162e8 50%,#f093b0 70%,#edca85 94%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -1.5px;
        line-height: 110%;
        text-transform: uppercase;
        margin-bottom: 5px;
            
        @media (min-width: 840px) {
            font-size: 70px;
        }
    }
    .home-picture {
        width: 50%;
        display: none;

        @media (min-width: 1024px) {
            display: flex;
            gap: 12px;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
        }

        img {
            width: 29%;
            height: 100%;
            display: block;
            box-shadow: 2px 2px 8px #202020; 
            filter: hue-rotate(-85deg);
            }
        }
    }
 
    .flex-container {
        gap: 20px;
        display: flex;
        align-items: center;
        height: 100%;

        @media (min-width: 840px) {       
            max-width: 1200px;
            margin:  0 auto;
        }
    }
`