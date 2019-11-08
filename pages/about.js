import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
    <div>
        <Head>
            <title>About | weStore</title>
        </Head>
        <h3>About Page..</h3>
    </div>
);

export default withLayout(About);