/* eslint-disable jsx-a11y/alt-text */
import { ProjectStyle } from './styles';
import { Image } from 'react-datocms';

import { FaArrowRight, FaCalendar } from 'react-icons/fa';
import { DiCodeBadge } from 'react-icons/di';
import P from '../UI/Typography/Paragraph';
import H3 from '../UI/Typography/H3';
import { RevealWrapper } from 'next-reveal';
import Link from 'next/link';

// interface ProjectProps {
//     project: {
//         name: string
//         description: string
//         tech: string
//         link: string
//         coverImage: {
//             responsiveImage: string
//         }
//         excerpt: string
//     }
// }

const Project = ({project, index}: any) => {
    const { name, tech, coverImage, excerpt, date, projectUrl } = project;
    console.log('project', project)
    return (
        <RevealWrapper origin={index % 2 !== 0 ? 'left' : 'right'} delay={250} duration={1500} distance='800px' viewOffset={{top:  25,  right:0,  bottom:  10,  left:25}}>
            <ProjectStyle className={index % 2 !== 0 ? 'alt' : ''}>
                
                <div className="meta">
                    <Image data={coverImage.responsiveImage} className="photo"/>
                    <ul className="details">
                        <li className="date"><FaCalendar className="inline-block"/> Created: {date}</li>
                        <li className="tags">
                            <ul>
                                <li><DiCodeBadge className="inline-block"/> Tech: {tech}</li>
                            </ul>
                        </li>   
                    </ul>
                </div>
                <div className="description">
                    <H3>{name}</H3>
                    <P className="description__text">{excerpt}</P>
                    <P className="read-more">
                        <Link className="font-bold underline" href={`/projects/${projectUrl}`}>View Project <FaArrowRight /></Link>
                    </P>
                </div>
            </ProjectStyle>
        </RevealWrapper>
    );
};
export default Project;