import Card from '../Card';
import { GitHubStyles } from './styles';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface GithubProps {
    pinnedRepoItems: [];
  }

const GitHub = ({pinnedRepoItems}: GithubProps) => {

    const items = pinnedRepoItems && pinnedRepoItems.map((repo: any) => {
        return (
            <Card key={repo.id} repo={repo} />
        )
    })

    console.log('pinnedRepoItems', pinnedRepoItems)

    return (
        <GitHubStyles>
            <div className="innerContainer">
                <h2>Pinned Github Repos</h2>
                <p>I am always building and playing around with projects here is just some of my pinned repos that I am most proud of.</p>
                <small>GitHub API &amp; GraphQL</small>
                <AliceCarousel
                    disableButtonsControls
                    autoPlay={true}
                    controlsStrategy="responsive"
                    mouseTracking
                    items={items}
                    autoPlayInterval={5000}
                    infinite={true}
                    keyboardNavigation={true}
                    // renderPrevButton={() => <FaAngleLeft/>}
                    // renderNextButton={() => <FaAngleRight/>}
                />
            </div>
        </GitHubStyles>
    );
};

export default GitHub;


