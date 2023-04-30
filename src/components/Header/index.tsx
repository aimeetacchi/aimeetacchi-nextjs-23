import { HeaderStyles } from './styles';
import Socials from '../Socials';
import Link from 'next/link'

const Header = () => {

    return (
        <HeaderStyles>
            <div className="container">
                <Link href="/">
                    <h1 className="font-oswald700sans"><span className="first-name">Aimee</span><br/>Tacchi</h1>
                </Link>

                <div className="social-contact">

                    <Socials />
                
                </div>
            </div>
        </HeaderStyles>
    );
};
export default Header;