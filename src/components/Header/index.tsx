import { HeaderStyles } from './styles';
import Socials from '../Socials';
import Link from 'next/link'
import Button from '../UI/Typography/Button'

const Header = () => {

    return (
        <HeaderStyles>
            <div className="container sm:flex">
            
                <Link href="/">
                    <h1 className="font-oswald700sans">
                        <span className="first-name">Aimee</span><br/>Tacchi
                    </h1>
                </Link>

                <ul className="mt-5 flex justify-center gap-5">
                  <li><Button><Link href="/about">About</Link></Button></li>
                  <li><Button><Link href="/projects">Projects</Link></Button></li>
                </ul>

                <div className="social-contact">
                    <Socials />
                </div>
            </div>
        </HeaderStyles>
    );
};
export default Header;