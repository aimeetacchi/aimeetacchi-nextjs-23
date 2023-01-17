import React from 'react'
import { SocialStyle } from './styles'
import { FaCodepen, FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Socials = () => {
  return (
    <SocialStyle>
        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/aimeetacchi">
            <FaCodepen/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/aimeetacchi">
            <FaGithub/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aimeetacchi/">
            <FaInstagram/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aimeetacchi/">
        <FaLinkedin/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/aimeetacchi">
        <FaTwitterSquare/>
        </a>
    </SocialStyle>
  )
}

export default Socials