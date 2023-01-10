import React from 'react'
import Header from '../Header'
import { FooterStyle } from './styles'

const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <FooterStyle danger>
                Aimee Tacchi | Web Developer ©{' '}
                {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://nextjs.org/">NextJS</a>
            </FooterStyle>
        </>
    )
}

export default Layout