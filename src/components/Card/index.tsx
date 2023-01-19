import { Oswald } from '@next/font/google'
import { CardStyles } from './styles';
const inter = Oswald({subsets: ['latin'] })

interface CardProps {
    repo: {
        description: String
        name: String
        languages: {
            nodes: [
                color: String,
                name: String,
            ]
        }
    }
}

const Card = ({repo}: CardProps) => {

    return (
        <CardStyles>
            <div className="card-header">
                <h2 className={inter.className}>{repo.name}</h2>
                <p className={inter.className}>{repo.description}</p>
                <div className="languages">
                    {repo.languages.nodes.map((language: any) => (
                        <div style={{color: `${language.color}`}} key={language.name}>
                            <p>{language.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </CardStyles>
    );
};

export default Card;


