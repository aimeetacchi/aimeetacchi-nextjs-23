import TechStackLogos from '../TechStackLogos';
import { AboutStyles } from './styles';

const About = () => {

    return (
        <AboutStyles>
            <div className="mt-48 mx-auto w-4/5 innerContainer">
                <h2 className="text-center mb-5">About Me</h2>
                <div className="divider"></div>
                <p className="text-base mb-5">As a self-taught web developer with 7 years of experience, I am committed to continuously learning and expanding my knowledge in the field. My passion for coding is reflected in how I spend most of my free time exploring new technologies and sharpening my skills. Whether I am coding for work or personal projects, I seek out opportunities to challenge myself and take on new projects. Each new challenge pushes me to reach my full potential and helps me grow as a developer. I thrive on using my skills to develop innovative solutions and I am always excited to tackle new projects that allow me to do so.</p>

                <p className="text-base mb-5">My skills span various technologies, including React, Typescript, HTML, CSS, Javascript and AWS Amplify, making me well-equipped to handle complex coding challenges and deliver high-quality front-end solutions. Whether I am developing a web application, a mobile app, or a responsive website, I approach each project with confidence and creativity, leveraging my skills to create visually appealing user interfaces.</p>

                <p className="text-base">Over the years, I have gained hands-on experience and continually adapted to emerging technologies to refine my skills. I take pride in delivering projects on time and on budget, and my dedication to producing high-quality work is evident in every project I undertake.</p>

                {/* List Skills Tech Logos here  */}
                <TechStackLogos/>
                

            </div>
        </AboutStyles>
    );
};

export default About;


