
import { CardStyles } from './styles';
import { Button } from '../../../styles/sharedstyled';
import P from '../UI/Typography/Paragraph';
import H2 from '../UI/Typography/H2';

interface CardProps {
    repo: {
        description: string
        name: string
        languages: {
            nodes: [
                color: string,
                name: string,
            ]
        }
        url: string
    }
}

const Card = ({repo}: CardProps) => {

    return (
        <CardStyles>
            <div className="card-header">
                <H2 className="mb-5">{repo.name.toUpperCase()}</H2>
                <P>{repo.description ? repo.description : 'No description for repo..'}</P>
                <div className="languages">
                    <small className="mt-3 
                    
                    text-base">Languages used: </small>
                    {repo.languages.nodes.map((language: any) => (
                        <div className={language.name.toLowerCase()} key={language.name}>
                            <P>{language.name}</P>
                        </div>
                    ))}
                </div>
                <Button className="button" target="_blank" rel="noreferrer" href={repo.url}>View Project</Button>
            </div>
        </CardStyles>
    );
};

export default Card;


