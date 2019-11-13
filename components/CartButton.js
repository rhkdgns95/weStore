import { Query, useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import Button from "./Button";

const GET_CART_CNT = gql`
    {
        cart @client {
            id
        }
    }
`;

export default () => {
    const { data } = useQuery(GET_CART_CNT);
    // return <div>hi</div>
    return <div><Button 
        href={"/cart"} 
        text={data && data.cart && data.cart.length === 0 ? "Cart" : `Cart ( ${data.cart.length} )`}
    /></div>;
};