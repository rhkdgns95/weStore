import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import { Button as AntButton } from "antd";

const reducerFn = (price, product) => price + product.price;

export default ({cartQuery}) => (
    <>
        <Head>
            <title>Cart | weStore</title>
        </Head>
        <Header
            centerColumn={ <h4>Cart</h4> }
            rightColunm={ <Button href={"/"} text={"Home"} /> }
            leftColumn={ <Button href={"/search"} text={"Search"}/>  }
        />
        <div
            style={{
                marginBottom: "50px",
                display: "grid",
                gridGap: "10px",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                with: "100%",
                padding: "0 50px"
            }}
        >
            {
                cartQuery &&
                cartQuery.cart &&
                cartQuery.cart.map(product => 
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        subtitle={product.detail}
                        price={product.price}
                        photoUrl={product.photo.url}
                    /> 
                )
            }
        </div>
        <div style={{ padding: "0 50px" }}>
            <h3>Total price: { cartQuery && cartQuery.cart && cartQuery.cart.reduce(reducerFn, 0) }</h3>
            <AntButton>Check out</AntButton>
        </div>
    </>
)