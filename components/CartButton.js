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
    return <Button 
        href={"/cart"} 
        text={data.cart.length === 0 ? "Cart" : `Cart ( ${data.cart.length} )`}
    />;
};