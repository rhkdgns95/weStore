import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Layout, Input } from "antd";
import ProductCard from "../../components/ProductCard";

const { Content } = Layout;

export default ({
  searchTerm,
  products: { data }
}) => (
  <>
    <Head>
      <title>Search | Nomad Store</title>
    </Head>
    <Header
      centerColumn={
        <h4>{searchTerm.value === "" ? "Search" : `Searching by ${searchTerm.value}`}</h4>
      }
      rightColumn={<Button href="/cart" text="Cart" />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <Content style={{ padding: "0 50px" }}>
      <Input
        placeholder={"Search by name"}
        { ...searchTerm }
      />
      <div style={{
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        width: "100%",
        margin: "50px 0"
      }}>
        {
            data &&
            data.products &&
            data.products.map(product => 
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
    </Content>
  </>
);