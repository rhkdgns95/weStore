import { FRAGMENT_PRODUCT } from "./pages/fragment";
import { gql } from "apollo-boost";

export const defaults = {
    cart: []
};
export const resolvers = {
    Mutation: {
        toggleProduct: (_, args, { cache, getCacheKey }) => {
            const id = getCacheKey({ __typename: "Product", id: args.id });
            const fragment = gql`
                ${ FRAGMENT_PRODUCT }
            `;
            const product = cache.readFragment({ fragment, id })
            console.log(product);
        }
    }
}