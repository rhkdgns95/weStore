import { gql } from "apollo-boost";
import { FRAGMENT_PRODUCT } from "../fragment";

export const SEARCH_PRODUCTS = gql`
    query searchProducts($searchTerm: String!){
        products(where: {
            OR: [
                { name_contains: $searchTerm }
                { description_contains: $searchTerm }
            ]
        }) {
             ...ProductItems 
        }
    }
    ${ FRAGMENT_PRODUCT }
`;