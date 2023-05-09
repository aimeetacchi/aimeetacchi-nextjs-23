import { gql } from 'graphql-request';

export const datoCmsQuery = gql`
    query {
            allProjects {
                id
                name
                gallery {
                    id
                    responsiveImage {
                        srcSet
                        src
                        width
                        height
                        alt
                        title
                    }
                }
                projectUrl
                slug
                description
                excerpt
                link
                tech
                recentWork
                coverImage {
                    id
                    responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format}) {
                        srcSet
                        webpSrcSet
                        sizes
                        src
                        width
                        height
                        aspectRatio
                        alt
                        title
                        base64
                    }
                }
            }
        }
`;