import SearchPresenter from "./searchPresenter";
import { useQuery } from "react-apollo";
import { SEARCH_PRODUCTS } from "../../searchQueries";

const useFetchQuery = (query, value, skip) => {
  const { data } = useQuery(query, {
    skip,
    variables: {
      searchTerm: value
    }
  });

  return {
    data
  };
}

const useInput = () => {
  const [value, setValue] = React.useState("");
  const [canSearch, setCanSearch] = React.useState(false);

  const searchRef = React.useRef();
  
  React.useEffect(() => {
      setCanSearch(true);
      clearTimeout(searchRef.current);
      searchRef.current = setTimeout(handleSearch, 500);
      return () => {
      };
  }, [ value ]);

  const handleSearch = () => {
    console.log("Searching...")
    setCanSearch(false);
  };

  const onChange = React.useCallback((event) => {
    const { target: { value }} = event;
    setValue(value);
  }, [value]);

  return {
    value,
    onChange,
    canSearch
  };
};

const useFetch = () => {
  const searchTerm = useInput();
  const products = useFetchQuery(SEARCH_PRODUCTS, searchTerm.value, searchTerm.canSearch || searchTerm.value === "");
  console.log("products: ", products);
  
  return {
    searchTerm,
    products
  };
};

export default React.memo(() => {
  React.useEffect(() => {
    console.log("I RENDERING!");
  })
  return <SearchPresenter { ...useFetch()}/>;
});