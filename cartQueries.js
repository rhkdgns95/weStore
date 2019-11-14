import { gql } from "apollo-boost";
import { FRAGMENT_PRODUCT } from "./fragment";

export const CART_QUERY = gql`
    {
        cart @client {
            ...ProductItems
        }
    }
    ${FRAGMENT_PRODUCT}
`;