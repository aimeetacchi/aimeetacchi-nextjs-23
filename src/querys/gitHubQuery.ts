import { gql } from 'graphql-request';

export const githubQuery = gql`
{
  user(login: "aimeetacchi") {
    pinnedItems(first: 10) {
      edges {
        node {
          ... on Repository {
            id
            description
            createdAt
            name
            languages(first: 10) {
              nodes {
                name
                color
              }
            }
            url
            stargazerCount
          }
        }
      }
    }
  }
}
`