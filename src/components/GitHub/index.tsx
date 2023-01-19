import { Oswald } from '@next/font/google'
import Card from '../Card';
import { GitHubStyles } from './styles';
const inter = Oswald({subsets: ['latin'] })

interface GithubProps {
    pinnedRepoItems: [];
  }

const GitHub = ({pinnedRepoItems}: GithubProps) => {

    console.log('pinnedRepoItems', pinnedRepoItems)

    return (
        <GitHubStyles>
            <div className="innerContainer">
                <h2 className={inter.className}>Pinned Github Repos</h2>
                <p className={inter.className}>I am always building and playing around with projects here is just some of my pinned repos that I am most proud of.</p>

                {
                    pinnedRepoItems && pinnedRepoItems.map((repo: any) => (
                        <Card key={repo.id} repo={repo} />
                    ))
                }
            </div>
        </GitHubStyles>
    );
};

export default GitHub;


