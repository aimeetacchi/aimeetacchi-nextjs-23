import TechStackLogos from '../TechStackLogos';
import P from '../UI/Typography/Paragraph';
import { AboutStyles } from './styles';
import { personalDetails } from '../../Details';

const About = () => {

    return (
        <AboutStyles>
            <div className="lg:mt-48 my-20 mx-auto w-4/5 innerContainer">
                <h2 className="text-center text-3xl mb-5 font-bold">About Me</h2>
                <div className="divider"></div>
                <P className="mb-4">{personalDetails.about1}</P>
                <P className="mb-4">{personalDetails.about2}</P>
                <P>{personalDetails.hobbies}</P>
            </div>
            <TechStackLogos/>
        </AboutStyles>
    );
};

export default About;


