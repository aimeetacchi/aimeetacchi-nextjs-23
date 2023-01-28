import styled from "styled-components";

export const ProjectStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 50px;
    box-shadow: 2px 2px 8px #202020; 
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.4;
    font-family: Source Code Pro, monospace;
    border-radius: 5px;
    overflow: hidden;
    max-width: 850px;

    a {
      color: inherit;
      &:hover {
        color: #5ad67d;
      }
    }

    &:hover {
      .photo {
        transform: scale(1.3) rotate(3deg);
      }
    }

    .meta {
      position: relative;
      z-index: 0;
      height: 200px;
    }

    .photo {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-size: cover;
      background-position: center;
      transition: transform .2s;
      max-width: 100%!important;
      width: 100%!important;
    }

    .details,
    .details ul {
      margin: auto;
      padding: 0;
      list-style: none;
    }

    .details {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -100%;
      margin: auto;
      transition: left .2s;
      background: rgba(0,0,0, .6);
      color: #fff;
      padding: 10px;
      width: 100%;
      font-size: .9rem;

      a {
        text-decoration: dotted underline
      }
      ul li {
        display: inline-block;
      }

      .tags {
        li {
          font-size: 12px;
          margin-right: 2px;
        }
      }
    }
    .description {
      color: ${({ theme }) => theme.text2};
      padding: 10px;
      background: #fff;
      position: relative;
      z-index: 1;

      h1 {
        line-height: 1;
        margin: 0;
        font-size: 25px;
        color: ${({ theme }) => theme.text2};
      }

      h2 {
        font-size: 22px;
        font-weight: 300;
        text-transform: uppercase;
        color: ${({ theme }) => theme.text2};
        margin-top: 5px;
      }

      .read-more {
        align-self: flex-end;

        a {
          font-size: 18px;
          color: ${({ theme }) => theme.text2};
          display: flex;
          align-items: center;
          gap: 5px;
          justify-content: flex-end;
          position: relative;
          transition: all 0.5s ease-in-out;

          &:hover {
            color: ${({ theme }) => theme.text2};
          }
        }
      }
    }

    .description__text {
      font-size: 14px;
      padding: 0 20px 0 0;
    }

    p {
      position: relative;
      margin: 1rem 0 0;

      &:first-of-type {
        margin-top: 1.25rem;

        &:before {
          content: "";
          position: absolute;
          height: 5px;
          background: ${({ theme }) => theme.text};
          width: 35px;
          top: -0.75rem;
          border-radius: 3px;
        }
      }
    }
    &:hover {
      .details {
        left: 0%;
      }
    }

     /* desktop */
     @media (min-width: 1024px) {
      flex-direction: row;
      max-width: 900px;
      margin: 20px auto;

      .meta {
        flex-basis: 40%;
        height: auto;
      }

    .description {
      flex-basis: 60%;
      display: grid;
      grid-template-rows: 35px auto auto;

      &:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }

    &.alt {
      flex-direction: row-reverse;

      .description {
        &:before {
          left: inherit;
          right: -10px;
          transform: skew(3deg)
        }
      }
      .details {
        padding-left: 25px;
      }
    }
  }
`