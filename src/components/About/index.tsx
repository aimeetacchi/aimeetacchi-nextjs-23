import { Oswald } from '@next/font/google'
import { AboutStyles } from './styles';
const inter = Oswald({subsets: ['latin'] })

const About = () => {

    return (
        <AboutStyles>
            <div className="innerContainer">
                <h2 className={inter.className}>About Aimee</h2>
                <p className={inter.className}>I&apos;m a self taught developer with just about 7 years experience. I am always learning something new and expanding my knowledge if I am not coding at work then I will be mostly coding in my spare time. </p>
            </div>
        </AboutStyles>
    );
};

export default About;


