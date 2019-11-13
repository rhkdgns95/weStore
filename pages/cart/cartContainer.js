import { CART_QUERY } from "./cartQueries"
import CartPresenter from "./cartPresenter";
import { useQuery } from "react-apollo";

const useFetchCart = () => {
    const { data: cartQuery } = useQuery(CART_QUERY)
    console.log("cartQuery: ", cartQuery);
    return { cartQuery };
}
export default () => <CartPresenter {...useFetchCart()}/>