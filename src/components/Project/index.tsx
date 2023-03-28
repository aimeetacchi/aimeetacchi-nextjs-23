/* eslint-disable jsx-a11y/alt-text */
import { ProjectStyle } from './styles';
import { Image } from 'react-datocms';

import { FaArrowRight, FaCalendar } from 'react-icons/fa';
import { DiCodeBadge } from 'react-icons/di';

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
                    <li className="date"><FaCalendar/> Created: {date}</li>
                    <li className="tags">
                        <ul>
                            <li><DiCodeBadge/> Tech: {tech}</li>
                        </ul>
                    </li>   
                </ul>
            </div>
            <div className="description">
                <h1>{name}</h1>
                <p className="description__text">{description}</p>
                <p className="read-more">
                    <a className="font-bold underline" rel="noopener noreferrer" target="_blank" href={link}>View Project <FaArrowRight /></a>
                </p>
            </div>
        </ProjectStyle>
    );
};
export default Project;