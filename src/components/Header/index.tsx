import { HeaderStyles } from './styles';
import { Oswald } from '@next/font/google'
import Socials from '../Socials';


const inter = Oswald({ subsets: ['latin'] })
const Header = () => {

    return (
        <HeaderStyles>
            <div className="container">
                <h1 className={inter.className}><span className="first-name">Aimee</span><br/>Tacchi</h1>

                <div className="social-contact">

                    <Socials />
                
                </div>
            </div>
        </HeaderStyles>
    );
};
export default Header;