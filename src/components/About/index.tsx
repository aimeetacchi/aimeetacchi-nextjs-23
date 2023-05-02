import TechStackLogos from '../TechStackLogos';
import P from '../UI/Typography/Paragraph';
import { AboutStyles } from './styles';
import { personalDetails } from '../../Details';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Button from '../UI/Typography/Button';
import ProfilePic from '../../../public/images/about-me.png';
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image';
import Experience from '../Experience';
import H2 from '../UI/Typography/H2';

const About = () => {
    const router = useRouter()
    return (
        <AboutStyles>
            <div className="lg:mt-48 my-20 mx-auto w-11/12 lg:w-4/5 innerContainer">
             
                <H2 className="text-center text-3xl mb-5 font-bold">About Me</H2>
                <Image className="w-2/3 md:w-1/4 rounded-full m-auto mb-10" src={ProfilePic} alt="profile pic"/>
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
                        <div className="flex justify-end">
                            <Button>
                                <Link className="font-base" href="/about">
                                    Read more about me <FaArrowRight/>
                                </Link>
                            </Button>
                        </div>
                    </>
                )}
               
            </div>
            <TechStackLogos/>
            {router.pathname === '/about' && <Experience/>}
        </AboutStyles>
    );
};

export default About;


