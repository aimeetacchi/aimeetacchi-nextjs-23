/* eslint-disable jsx-a11y/alt-text */
import { ProjectStyle } from './styles';
import { Image, ImagePropTypes } from 'react-datocms';

interface ProjectProps {
    name: string
    description: string
    tech: string
    link: string
    coverImage: object 
}

interface ImageProps extends ImagePropTypes {
    alt: string
}

const Project = ({project}: any) => {
    const { name, description, tech, link, coverImage } = project;

    return (
        <ProjectStyle>
        <div>

            <Image data={coverImage.responsiveImage} />
            <div>
                <h3>{name}</h3>
                <p>Description: {description}
                </p>
                <hr/>
                <p>
                    Tech: {tech}
                </p>
                <a href={link}>View Project</a>
            </div>
        </div>
    </ProjectStyle>
    );
};
export default Project;