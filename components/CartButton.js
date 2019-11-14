import { gql } from "apollo-boost";
import Button from "./Button";
import withApollo from "next-with-apollo";
import { useQuery } from "react-apollo";

export const GET_CART_CNT = gql`
    {
        cart @client {
            id
        }
    }
`;
export default () => {
    const { data } = useQuery(GET_CART_CNT);
    if(!data) {
        return <div>hi...</div>
    }
    return <Button 
        href={"/cart"} 
        text={data.cart && data.cart.length === 0 ? "Cart" : `Cart ( ${data.cart.length} )`}
    />;
};
// export default withApollo(() => {
//     const { data } = useQuery(GET_CART_CNT);
//     // return <div>hi</div>
//     if(!data) {
//         return <div>hi...</div>
//     }
//     return <Button 
//         href={"/cart"} 
//         text={data.cart && data.cart.length === 0 ? "Cart" : `Cart ( ${data.cart.length} )`}
//     />;
// })
