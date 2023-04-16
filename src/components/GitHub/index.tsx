import Card from '../Card';
import { GitHubStyles } from './styles';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import P from '../UI/Typography/Paragraph';
import H3 from '../UI/Typography/H3';
import { gitHubDetails } from '../../Details';

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
                <H3 className="mb-5">{gitHubDetails.title}</H3>
                <P>{gitHubDetails.content}</P>
                <small className="text-sm">{gitHubDetails.smalltext}</small>
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


