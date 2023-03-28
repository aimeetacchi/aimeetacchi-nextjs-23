import { HeaderStyles } from './styles';
import Socials from '../Socials';

const Header = () => {

    return (
        <HeaderStyles>
            <div className="container">
                <h1 className={'font-oswald700sans'}><span className="first-name">Aimee</span><br/>Tacchi</h1>

                <div className="social-contact">

                    <Socials />
                
                </div>
            </div>
        </HeaderStyles>
    );
};
export default Header;