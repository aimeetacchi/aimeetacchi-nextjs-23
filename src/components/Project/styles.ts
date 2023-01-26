import styled from "styled-components";

export const ProjectStyle = styled.div`
    /* margin-top: 10px;
    background-color: #000000;
    padding: 20px;
    margin-top: 100px;
    width: 100%; */
   
    @media (min-width: 520px) {
    }
    @media (min-width: 640px) {
        /* font-size: 1.5rem; */
        width: 50%;
    }

    .name__box {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ccc;
        border: 4px solid;
        font-weight: bold;
        padding: 5px 10px;
    }
.project-card {
  padding: 30px;
  position: relative;
  .name__box {
    opacity: 0;
    transform: scale(0.5);
    transition: 300ms ease-in-out;
  }
  .project-card__background,
  .card__background--layer{
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .card__image {

  }
  /* .project-card__background {
    padding: 15px;
    background: white;
  } */
  /* .card__background--wrapper{
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
    position: relative;
    overflow: hidden;
  }
  .card__background--main{
    height: 100%;
    position: relative;
    transition: 300ms ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card__background--layer {
    z-index: 0;
    opacity: 0;
    background: rgba(#333, 0.9);
    transition: 300ms ease-in-out;
  } */
  .project-card__head {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-card__info {
    z-index: 10;
    background: ${({ theme }) => theme.body};;
    padding: 20px 15px;
    h5 {
      transition: 300ms ease-in-out;
      color: ${({ theme }) => theme.text};
    }
    span {
        color: ${({ theme }) => theme.text};
    }
    p, small {
        color: ${({ theme }) => theme.text};
    }
  }
  &:hover {
    .name__box{
      opacity: 1;
      transform: scale(1);
    }
    .card__background--main {
      transform: scale(1.2) rotate(5deg);
    }
    .card__background--layer {
      opacity: 1;
    }
    .project-card__info{
      h5{
        color: ${({ theme }) => theme.text};
      }
    }
  }
}

a.icon-link {
  color: ${({ theme }) => theme.text};
  transition: 200ms ease-in-out;
  i {
    color: black;
  }
  &:hover {
    color: black;
    text-decoration: none;
  }
}

.btn {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  outline: none;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 0;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  padding: 0;
  border: none;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    background: ${({ theme }) => theme.text};
    color: #fff;
  }
  &.btn--with-icon {
    padding-right: 20px;
    i {
      padding: 0px 20px 0px 10px;
      margin-right: 10px;
      height: 30px;
      line-height: 30px;
      vertical-align: bottom;
      color: white;
      background: black;
      clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
    }
  }
  &.btn--only-icon {
    width: 50px;
  }
}

`