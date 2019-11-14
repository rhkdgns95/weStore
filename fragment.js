import { gql } from "apollo-boost";

export const FRAGMENT_PRODUCT = gql`
    fragment ProductItems on Product {
        id
        name
        detail
        onCart @client
        photo {
            url
        }
        price
    }
`;