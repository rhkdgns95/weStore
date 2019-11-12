import { withRouter } from "next/router";
import ProductPresenter from "./productPresenter";
import { useQuery } from "react-apollo";
import { SEARCH_PRODUCT } from "./productQueries";

const useFetchQuery = (query, id) => {
    let data; 
    try {
        const { data: queryData } = useQuery(query, {
            variables: {
                id: id ? id : 0
            },
            skip: id ? false : true
        });
        data = queryData;
    } catch(error) {
        console.log("ERROR: ", error.message);
    }
    
    return data;
}
const useFetch = (id) => {
    const product = useFetchQuery(SEARCH_PRODUCT, id);
    return product;
}

const ProductContainer = ({ id }) => <ProductPresenter { ...useFetch(id) }/>;

ProductContainer.getInitialProps = async(props) => {
    const { query: { id }} = props;
    return {
        id
    };
}

export default withRouter(ProductContainer);