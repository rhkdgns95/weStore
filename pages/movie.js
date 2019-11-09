import { withRouter } from "next/router";
import Head from "next/head";

const movie = ({router: {query:{id, title}}}) => (
    <div>
        <Head>
            <title>{ title }</title>
        </Head>
    </div>
)

export default withRouter(movie);