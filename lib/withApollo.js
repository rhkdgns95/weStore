import withApollo from "next-with-apollo";
import { API_URL } from "../config";
import { resolvers } from "../resolvers";
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-boost";

const link = createHttpLink({
    uri: API_URL
});
const cache = new InMemoryCache();
cache.writeData({
    data: {
        cart: []
    }
});

export default withApollo(() => 
    new ApolloClient({ 
        link,
        cache,
        resolvers
    })
);