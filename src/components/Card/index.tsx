import { Oswald } from '@next/font/google'
import { CardStyles } from './styles';
import { Button } from '../../../styles/sharedstyled';
const inter = Oswald({subsets: ['latin'] })

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
                <h2 className={inter.className}>{repo.name.toUpperCase()}</h2>
                <p className={inter.className}>{repo.description ? repo.description : 'No description for repo..'}</p>
                <div className="languages">
                    <small>Languages used: </small>
                    {repo.languages.nodes.map((language: any) => (
                        <div style={{color: `${language.color}`}} key={language.name}>
                            <p>{language.name}</p>
                        </div>
                    ))}
                </div>
                <Button className={`button ${inter.className}`} target="_blank" rel="noreferrer" href={repo.url}>View Repo</Button>
            </div>
        </CardStyles>
    );
};

export default Card;


