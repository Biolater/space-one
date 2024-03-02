import { Skeleton } from "@mui/material"
type SearchBarSuggestionsProps = {
  suggestions: object[];
  noResult: boolean;
  loading: boolean;
};

const SearchBarSuggestions = ({ suggestions, noResult, loading }: SearchBarSuggestionsProps) => {
  return (
    <div className="suggestions absolute top-20">
    {loading && ( 
        <> 
            {Array(3).fill(null).map((_, index) => ( 
                <Skeleton animation={"wave"} variant="text" width={200} height={30} key={index} /> 
            ))}
        </> 
    )}

      {!loading && suggestions.length > 0 &&
        suggestions.map((suggestion: object, index: number) => (
          <SearcBarSuggestion suggestion={suggestion} key={index} />
        ))
      }
        {noResult && <div className="suggestion">No result found</div>}
    </div>
  );
};

export default SearchBarSuggestions;

const SearcBarSuggestion = ({ suggestion }: any) => {
  return <div className="suggestion">{suggestion?.data[0]?.title || ""}</div>;
};


