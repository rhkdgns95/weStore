import { FRAGMENT_PRODUCT } from "../fragment";
import { gql } from "apollo-boost";

export const SEARCH_PRODUCT = gql`
    query searchProduct($id: ID!) {
        product(where: { id: $id }) {
            ...ProductItems
            description
        }
    }
    ${ FRAGMENT_PRODUCT }
`;