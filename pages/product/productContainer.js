import { withRouter } from "next/router";
import ProductPresenter from "./productPresenter";
import { useQuery, useMutation } from "react-apollo";
import { SEARCH_PRODUCT, TOGGLE_CART } from "./productQueries";
import { GET_CART_CNT } from "../../components/CartButton";

const useFetchQuery = (query, id) => {
    const { data } = useQuery(query, {
        variables: {
            id: id ? id : 0
        },
        skip: id ? false : true
    });
    
    return data;
}
const useFetchMutation = (query, id) => {
    const [ toggleCart ] = useMutation(query, {
        variables: {
            id
        }
    });
    return toggleCart;
}
const useFetch = (id) => {
    const queryProduct = useFetchQuery(SEARCH_PRODUCT, id);
    const toggleCart = useFetchMutation(TOGGLE_CART, id);
    return {
        queryProduct,
        toggleCart
    };
}
const ProductContainer = ({ id }) => <ProductPresenter { ...useFetch(id) }/>;

ProductContainer.getInitialProps = async(props) => {
    const { query: { id }} = props;
    return {
        id
    };
}

export default withRouter(ProductContainer);