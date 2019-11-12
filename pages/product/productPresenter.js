import Head from "next/head";
import { Button as AntButton } from "antd";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default (data) => (
    <>
        {
            data &&
            data.product && (
            <>
                <Head>
                    <title>{ data.product.name } | weStore</title>
                </Head>
                <Header 
                    centerColumn={<h4>Product</h4>}
                    rightColunm={ <Button href="/cart" text="Cart" as={"/"}/> }
                    leftColumn={ <Button href="/" text="Home" as={"/"}/> }
                />
                <div className={"product"}>
                    <img src={ data.product.photo.url } />
                    <div>
                        <h2>{ data.product.name }</h2>
                        <h3>{ data.product.detail }</h3>
                        <h4>{ data.product.description }</h4>
                        <AntButton type={"primary"}>
                            Add to cart( ${data.product.price} )
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
