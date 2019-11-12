import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Layout, Input } from "antd";

const { Content } = Layout;

export default ({
  searchTerm
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
        {...searchTerm}
      />
    </Content>
  </>
);