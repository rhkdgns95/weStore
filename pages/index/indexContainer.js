import { useQuery } from "react-apollo";
import IndexPresenter from "./indexPresenter";
import { INDEX_QUERY } from "./indexQueries";

const getQuery = () => {
    const { data } = useQuery(INDEX_QUERY);
    
    return {
        data 
    };
}
export default () => {
    const value = getQuery();
    console.log(value);
    return <div><IndexPresenter { ...getQuery() }/></div>
}
// export default () => <IndexPresenter { ...getQuery() }/>;