import { gql } from "apollo-boost";

export const SEARCH_PRODUCTS = gql`
    query searchProducts($searchTerm: String!) {
        products(where: {
            OR: [
                { name_contains: $searchTerm },
                { description_contains: $searchTerm }
            ]
        }) {
            id
            name
            detail
            photo {
                url
            }
            price
        }
    }
`;