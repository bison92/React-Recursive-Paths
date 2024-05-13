import { useParams } from "react-router-dom";

const SearchResults = (props: { value?: string }) => {
  let finalSearch = props.value;

  const { search } = useParams();

  if (finalSearch === "" && search !== "") {
    finalSearch = search;
  }

  return finalSearch ? (
    <>
      <h3>Search results for : {finalSearch}</h3>
      <div>
        {/* {node.children
          .filter((c) => c.keywords?.includes(searchContext))
          .map((node) => (
            <div key={node.id}>
              <Link to={node.id}>{node.name}</Link>
            </div>
          ))} */}
      </div>
    </>
  ) : (
    <></>
  );
};

export default SearchResults;
