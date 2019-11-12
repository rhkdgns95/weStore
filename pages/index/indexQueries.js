import { gql } from "apollo-boost";
import { FRAGMENT_PRODUCT } from "../fragment";

export const INDEX_QUERY = gql`
    {
        categories{
            id
            name
        }
        onSale: products(where: { onSale: true }) {
             ...ProductItems 
        }
        allProducts: products(where: { onSale: false }) {
             ...ProductItems 
        }
        # onSale: products(where: {onSale: false}) {
        #     id
        #     name
        #     photo {
        #         url
        #     }
        # }
    }
    ${ FRAGMENT_PRODUCT }
`;