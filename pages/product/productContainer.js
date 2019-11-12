import { withRouter } from "next/router";
import ProductPresenter from "./productPresenter";
   
const ProductContainer = () => {
    return <ProductPresenter />
};

ProductContainer.getInitialProps = async(props) => {
    console.log("PROPS: ", props.query);
    
    return <ProductContainer />;
}
export default withRouter(ProductContainer);