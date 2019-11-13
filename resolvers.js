import { FRAGMENT_PRODUCT } from "./pages/fragment";
import { gql } from "apollo-boost";

// export const defaults = {
//     cart: []
// };
export const resolvers = {
    Mutation: {
        toggleProduct: (_, args, { cache, getCacheKey }) => {
            console.log("1. ID: ", args.id);
            const id = getCacheKey({ __typename: "Product", id: args.id });
            console.log("1. ID: ", id);
            const fragment = gql`
                ${ FRAGMENT_PRODUCT }
            `;
            const product = cache.readFragment({ fragment, id })
            const cartQuery = gql`
                {
                    cart @client {
                        id
                    }
                }
            `;
            const { cart } = cache.readQuery({
                query: cartQuery
            });
            let newCart;
            let onCart;

            const foundProduct = cart.find(aProduct => aProduct.id === product.id);
            
            if(foundProduct) {
                const cleanCart = cart.filter(aProduct => aProduct.id !== product.id);
                newCart = cleanCart;
                onCart = false;
            } else {
                newCart = [ ...cart, product ];
                onCart = true;
            }
            cache.writeData({
                data: {
                    cart: newCart 
                }
            });
            cache.writeFragment({
                id: `Product:${product.id}`,
                fragment: FRAGMENT_PRODUCT,
                data: {
                    __typename: "Product",
                    ...product,
                    onCart
                }
            });
            return null;
        }
    },
    Product: {
        onCart: () => false
    }
}