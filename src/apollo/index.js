import { ApolloClient, InMemoryCache } from '@apollo/client';

export default function getApolloClient() {
    const cache = new InMemoryCache()

    const client = new ApolloClient({
        uri: 'https://swapi-graphql-tech.herokuapp.com/',
        cache
    });
    return client
}



