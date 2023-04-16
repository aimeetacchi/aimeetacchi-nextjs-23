
import { CardStyles } from './styles';
import { Button } from '../../../styles/sharedstyled';
import P from '../UI/Typography/Paragraph';

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
                <h2>{repo.name.toUpperCase()}</h2>
                <P>{repo.description ? repo.description : 'No description for repo..'}</P>
                <div className="languages">
                    <small>Languages used: </small>
                    {repo.languages.nodes.map((language: any) => (
                        <div style={{color: `${language.color}`}} key={language.name}>
                            <P>{language.name}</P>
                        </div>
                    ))}
                </div>
                <Button className="button" target="_blank" rel="noreferrer" href={repo.url}>View Repo</Button>
            </div>
        </CardStyles>
    );
};

export default Card;


