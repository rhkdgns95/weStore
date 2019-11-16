import { CART_QUERY } from "../../cartQueries"
import CartPresenter from "./cartPresenter";
import { useQuery } from "react-apollo";

const reducerFn = (price, product) => price + product.price;

const supportedCards = [{
    supportedMethods: "basic-card",
    data: {
        supportedNetworks: ['visa', 'mastercard', 'unionpay', 'discover', 'diners'],
        supportedTypes: ['debit', 'credit']            
    }
}];
const items = {
    id: 'order-123',
    displayItems: [
        {
            label: 'Example item',
            amount: { currency: "USD", value: "1.00" }
        }
    ],
    total: {
        label: "Total",
        amount: { currency: "USD", value: "1.00" }
    }
};

const useFetchCart = () => {
    const [ carts, setCarts ] = React.useState([]);
    const handleSuccess = data => {
        setCarts({ ...data });
        console.log("DAT: ", data);
    }
    const { data: cartQuery } = useQuery(CART_QUERY,{
        onCompleted: handleSuccess
    });
    

    /**
     *  onPay = () => {}
     *
     *  payMent요청을 생성하고,
     *  payment request show 인것이다.
     * 
     */
    const onPay = () => {
        const items = carts.cart.map(product => {
            return {
                label: product.label,
                amount: {
                    currency: "USD",
                    value: product.price
                }
            }
        });
        const total = carts.cart.reduce((price, product) => price + product.price, 0);
        const paymentRequest = new PaymentRequest(supportedCards,  { 
            items,
            total: {
                label: "Total Price",
                amount: { currency: "USD", value: total }
            }
         });
        paymentRequest.show();
    }
    
    console.log("cartQuery: ", cartQuery);
    
    return { 
        cartQuery,
        onPay
    };
}
export default () => <CartPresenter {...useFetchCart()}/>