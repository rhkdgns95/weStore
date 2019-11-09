import { withRouter } from "next/router";
import Axios from "axios";
import Head from "next/head";

const DetailsURL = "https://yts.am/api/v2/movie_details.json?movie_id=";
const Movie = (props) => (
    <div>
        <Head>
            <title>{ props.movie.title }</title>
        </Head>
        <p>{ props.movie.id }</p>
        <p>{ props.movie.description_intro }</p>
        <div>{ props.movie.title }</div>
    </div>
);

/**
 *  Movie.getInitialProps는 Movie가 rendering되기전에 
 *  호출되므로 props에 다음과 같이 데이터를 대입할 수 있다.
 *  그러므로 NextJS에서는 Loading이 필요없다. 
 */
Movie.getInitialProps = async ({query: { id }}) => {
    const url = `${DetailsURL}${id}`;
    const {data: {data: {movie}}} = await Axios.get(url);
    return {
        movie
    };
}
export default withRouter(Movie);