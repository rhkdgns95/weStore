import SearchPresenter from "./searchPresenter";

const useInput = () => {
  const [value, setValue] = React.useState("");
  const searchRef = React.useRef();
  
  React.useEffect(() => {
      clearTimeout(searchRef.current);
      searchRef.current = setTimeout(handleSearch, 500);
      return () => {
      };
  }, [ value ]);

  const handleSearch = () => {
    console.log("Searching...")
  };

  const onChange = (event) => {
    const { target: { value }} = event;
    setValue(value);
  }

  return {
    value,
    onChange
  };
}

const useFetch = () => {
  const searchTerm = useInput();
  return {
    searchTerm
  };
};

export default () => <SearchPresenter { ...useFetch()}/>;