import { Layout } from "antd";
import Head from "next/head";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import CartButton from "../../components/CartButton";

const { Content } = Layout;

export default ({ dataQuery }) => (
    <>
        <Head>
            <title>Home | weStore</title>
            <Header
                centerColumn={<h4>weStore</h4>}
                rightColunm={ <CartButton /> }
                leftColumn={ <Button href={"/search"} text={"Search"}/> }
            />
            <Content style={{ padding: "0 50px" }}>
                <div
                    style={{
                        display: "grid",
                        gridGap: "10px",
                        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                        with: "100%"
                    }}
                >
                    {
                        dataQuery &&
                        dataQuery.categories &&
                        dataQuery.categories.map(category => 
                            <Button 
                                key={category.id}
                                href={`/category?name=${category.name}`}
                                hrefAs={`/category/${category.name}`}
                                text={`${category.name}`}
                            />
                        )
                    }
                </div>
                <div style={{marginTop: "50px"}}>
                    {
                        dataQuery &&
                        dataQuery.onSale &&
                        dataQuery.onSale.length !== 0 && <h2>On Sale</h2>
                    }
                    <div style={{
                        display: "grid",
                        gridGap: "10px",
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        width: "100%"
                    }}>
                        {
                            dataQuery &&
                            dataQuery.onSale &&
                            dataQuery.onSale.map(product => 
                                <ProductCard 
                                    key={ product.id }
                                    id={ product.id }
                                    name={ product.name }
                                    subtitle={ product.detail }
                                    price={ product.price }
                                    photoUrl={ product.photo.url }
                                />
                            )
                        }
                    </div>
                </div>
                <div style={{marginTop: "50px"}}>
                    {
                        dataQuery &&
                        dataQuery.allProducts &&
                        dataQuery.allProducts.length !== 0 && <h2>All Products</h2>
                    }
                    <div style={{
                        display: "grid",
                        gridGap: "10px",
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        width: "100%"
                    }}>
                    {
                        dataQuery &&
                        dataQuery.allProducts &&
                        dataQuery.allProducts.map(product => 
                            <ProductCard 
                                key={ product.id }
                                id={ product.id }
                                name={ product.name }
                                subtitle={ product.detail }
                                photoUrl={ product.photo.url }
                                price={ product.price }
                            />

                            
                        )
                    }
                    </div>
                </div>
            </Content>
        </Head>
    </>
);