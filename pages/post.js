import { withRouter } from "next/router";
import withLayout from "../lib/withLayout";
import Head from "next/head";

const Post = ({router: {query:{title}}}) => (
    <div>
        <Head>
            <title>{ title }</title>
        </Head>
    </div>
)

export default withLayout(withRouter(Post));