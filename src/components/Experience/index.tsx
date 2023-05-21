
import { ExperienceStyles } from './styles';
import P from '../UI/Typography/Paragraph';
import { workDetails, experienceContent } from '../../Details';
import H2 from '../UI/Typography/H2';
import H4 from '../UI/Typography/H4';
import { RevealWrapper } from 'next-reveal';

const Experience = () => {

    return (
        <ExperienceStyles>
            <div className="card-header">
                <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='bottom' delay={200} duration={1000} distance='500px' viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
                    <H2>{experienceContent.title}</H2>
                </RevealWrapper>

                    <div className="mt-5 flex justify-center flex-wrap">
                    {workDetails.map((experience: any) => (
                        <div key={experience.company} className="lg:w-1/2 border px-3 lg:px-10 py-8 mb-6">
                            <H4>{experience.position}</H4>
                            <P><strong>Company:</strong> {experience.company}</P>
                            <P><strong>Location:</strong> {experience.location}</P>
                            <P>{experience.duration}</P>
                            <br/>
                            <P>{experience.description}
                            <br/>
                            <br/>
                            <strong>Tech Stack:</strong> {experience.techStack}</P>
                            {experience.link && (
                                <p className="mt-3"><a href={experience.link}>{experience.link}</a></p>
                            )}
                        </div>
                    ))}
                    </div>

            </div>
        </ExperienceStyles>
    );
};

export default Experience;


