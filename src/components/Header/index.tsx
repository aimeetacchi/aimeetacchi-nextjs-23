import { HeaderStyles } from './styles';
import { Oswald } from '@next/font/google'


const inter = Oswald({ subsets: ['latin'] })
const Header = () => {

    return (
        <HeaderStyles>
            <div className="container">
                <h1 className={inter.className}><span className="first-name">Aimee</span><br/>Tacchi</h1>

                <div className="social-contact">
                
                Add Socials here

                </div>
            </div>
        </HeaderStyles>
    );
};
export default Header;