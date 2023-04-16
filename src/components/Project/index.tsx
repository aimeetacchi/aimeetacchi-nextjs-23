/* eslint-disable jsx-a11y/alt-text */
import { ProjectStyle } from './styles';
import { Image } from 'react-datocms';

import { FaArrowRight, FaCalendar } from 'react-icons/fa';
import { DiCodeBadge } from 'react-icons/di';
import P from '../UI/Typography/Paragraph';
import H3 from '../UI/Typography/H3';

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
    const { name, description, tech, link, coverImage, excerpt, date } = project;
    console.log('project', project)
    return (
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
                <P className="description__text">{description}</P>
                <P className="read-more">
                    <a className="font-bold underline" rel="noopener noreferrer" target="_blank" href={link}>View Project <FaArrowRight /></a>
                </P>
            </div>
        </ProjectStyle>
    );
};
export default Project;