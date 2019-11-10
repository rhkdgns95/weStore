import { Layout } from "antd";
import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";

const { Content } = Layout;

export default ({data}) => (
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
                    {
                        data &&
                        data.categories &&
                        data.categories.map(category => 
                            <Button 
                                key={category.id}
                                href={`/category?name=${category.name}`}
                                hrefAs={`/category/${category}`}
                                text={`${category.name}`}
                            />
                        )
                    }
                </div>
            </Content>
        </Head>
    </>
);