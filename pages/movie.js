import { withRouter } from "next/router";
import Head from "next/head";

const Movie = (props) => (
    <div>
        <Head>
            <title>{ props.title }</title>
        </Head>
        <div>{ props.title }</div>
    </div>
);

/**
 *  Movie.getInitialProps는 Movie가 rendering되기전에 
 *  호출되므로 props에 다음과 같이 데이터를 대입할 수 있다.
 *  그러므로 NextJS에서는 Loading이 필요없다. 
 */
Movie.getInitialProps = async () => {
    return {
        title: "Hello Title"
    };
}
export default withRouter(Movie);