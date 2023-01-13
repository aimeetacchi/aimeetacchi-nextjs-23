import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://api.github.com/graphql';

const gitHubClient = new GraphQLClient(endpoint, {
    headers: {
        // "content-type": "application/json",
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
})

export default gitHubClient;