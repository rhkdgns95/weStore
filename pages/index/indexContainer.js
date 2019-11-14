import { useQuery } from "react-apollo";
import IndexPresenter from "./indexPresenter";
import { INDEX_QUERY } from "../../indexQueries";

const getQuery = () => {
    const { data: dataQuery } = useQuery(INDEX_QUERY);
    
    return {
        dataQuery 
    };
}
export default () => <IndexPresenter { ...getQuery() }/>
// export default () => <IndexPresenter { ...getQuery() }/>;