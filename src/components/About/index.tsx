import TechStackLogos from '../TechStackLogos';
import P from '../UI/Typography/Paragraph';
import { AboutStyles } from './styles';
import { personalDetails } from '../../Details';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Button from '../UI/Typography/Button';

const About = () => {
    const router = useRouter()
    return (
        <AboutStyles>
            <div className="lg:mt-48 my-20 mx-auto w-4/5 innerContainer">
                <h2 className="text-center text-3xl mb-5 font-bold">About Me</h2>
                <div className="divider"></div>
              

                {router.pathname === '/about' ? (
                <>
                    <P className="mb-4">{personalDetails.about1}</P>
                    <P className="mb-4">{personalDetails.about2}</P>
                    <P>{personalDetails.hobbies}</P>
                    
                </>
                ) : (
                    <>
                        <P className="mb-4">{personalDetails.about_home}...</P>
                        <Button>
                            <Link className="font-base" href="/about">Read more about me</Link>
                        </Button>
                    </>
                )}
               
            </div>
            <TechStackLogos/>
        </AboutStyles>
    );
};

export default About;


