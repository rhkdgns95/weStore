import Head from "next/head";
import { Button as AntButton } from "antd";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default ({
    queryProduct,
    toggleCart
}) => (
    <>
        {
            queryProduct &&
            queryProduct.product && (
            <>
                <Head>
                    <title>{ queryProduct.product.name } | weStore</title>
                </Head>
                <Header 
                    centerColumn={<h4>Product</h4>}
                    rightColunm={ <Button href="/cart" text="Cart" as={"/"}/> }
                    leftColumn={ <Button href="/" text="Home" as={"/"}/> }
                />
                <div className={"product"}>
                    <img src={ queryProduct.product.photo.url } />
                    <div>
                        <h2>{ queryProduct.product.name }</h2>
                        <h3>{ queryProduct.product.detail }</h3>
                        <h4>{ queryProduct.product.description }</h4>
                        <AntButton type={"primary"} onClick={toggleCart}>
                            Add to cart( ${queryProduct.product.price} )
                        </AntButton>
                    </div>
                    <style jsx>
                    {`
                        .product {
                            display: grid;
                            margin: 50px 0px;
                            padding: 0 50px;
                            grid-template-columns: repeat(2, 1fr);
                            grid-gap: 50px;
                        }
                        .product img {
                            max-width: 100%;
                        }
                    `}
                    </style>
                </div>
            </>
            )
        }
    </>
);
