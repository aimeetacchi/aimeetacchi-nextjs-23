import React from 'react'
import Header from '../Header'
import Socials from '../Socials'
import { FooterStyle } from './styles'

const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <FooterStyle>
                Aimee Tacchi | React Developer ©{' '}
                {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://nextjs.org/">NextJS</a>
                <div className="footer-socials-container">
                    <Socials />
                </div>
            </FooterStyle>
        </>
    )
}

export default Layout