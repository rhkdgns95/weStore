import { Layout } from "antd";
import Head from "next/head";
import Header from "../components/Header";
import Button from "../components/Button";

const { Content } = Layout;

export default ({ data }) => (
    <>
        <Head>
            <title>Home | weStore</title>
            <Header
                centerColumn={<h4>weStore</h4>}
                rightColunm={ 
                    <Button href={"/cart"} text="Cart" btnIcon={"shopping-cart"} />
                }
                leftColumn={ <Button href={"/search"} text={"Search"} btnIcon={"search"}></Button> }
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
                    <Button 
                        href={`/category?name=men`}
                        hrefAs={`category/men`}
                        text={"Men"}
                    />
                    <Button 
                        href={`/category?name=men`}
                        hrefAs={`category/men`}
                        text={"Women"}
                    />
                    <Button 
                        href={`/category?name=men`}
                        hrefAs={`category/men`}
                        text={"Shoes"}
                    />
                    <Button 
                        href={`/category?name=men`}
                        hrefAs={`category/men`}
                        text={"Suits"}
                    />
                    <Button 
                        href={`/category?name=men`}
                        hrefAs={`category/men`}
                        text={"Dresses"}
                    />
                    <Button 
                        href={`/category?name=men`}
                        hrefAs={`category/men`}
                        text={"Men"}
                    />
                </div>

            </Content>
        </Head>
    </>
);