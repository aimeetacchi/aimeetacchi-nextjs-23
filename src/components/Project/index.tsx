/* eslint-disable jsx-a11y/alt-text */
import { ProjectStyle } from './styles';
import { Image } from 'react-datocms';

import { FaArrowRight } from 'react-icons/fa';

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
//         recentWork: boolean
//     }
// }

const Project = ({project}: any) => {
    const { name, description, tech, link, coverImage, excerpt, recentWork  } = project;
    console.log('project', project)
    return (
    <ProjectStyle>
        <article className="project-card">
            {/* <Image data={coverImage.responsiveImage} className="card__image"/> */}
            <div className="project-card__head">
                <span className="name__box">{name}</span>
            </div>
            <div className="project-card__info">
                <h5>{name}</h5>
                <small>
                    Tech used: {tech}
                </small>
                <p>{description}</p>
                <a rel="noopener noreferrer" target="_blank" href={link} className="btn btn--with-icon"><FaArrowRight/>VIEW</a>
            </div>
      </article>
    </ProjectStyle>
    );
};
export default Project;