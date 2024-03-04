import { Skeleton } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
type SearchBarSuggestionsProps = {
  suggestions: object[];
  noResult: boolean;
  loading: boolean;
  sliceCount: number;
  onLoadMore: () => void;
  hideLoadMore?: boolean;
};



const SearchBarSuggestions = ({
  suggestions,
  noResult,
  loading,
  sliceCount,
  onLoadMore,
  hideLoadMore
}: SearchBarSuggestionsProps) => {
  return (
    <div className="suggestions py-4 left-0 px-4 w-full absolute top-20 sm:grid sm:grid-cols-2 gap-x-10 md:grid-cols-3 items-start">
      {loading && (
        <>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <Skeleton
                animation={"wave"}
                variant="text"
                width={200}
                height={30}
                key={index}
              />
            ))}
        </>
      )}

      {!loading &&
        suggestions.length > 0 &&
        suggestions.slice(0,sliceCount).map((suggestion: object, index: number) => (
          <SearcBarSuggestion suggestion={suggestion} key={index} />
        ))}
      {suggestions.length > 5 && !hideLoadMore && <Button onClick={onLoadMore} sx={{gridColumn:"span 2"}} variant="outlined">Load More</Button> }
      {noResult && <div className="suggestion">No result found</div>}
    </div>
  );
};

export default SearchBarSuggestions;

const SearcBarSuggestion = ({ suggestion }: any) => {
  // Assuming your image URL might be in a property like suggestion.image_url
  const imageUrl = suggestion?.links?.find((link: any) => link.rel === "preview")?.href;
  return (
    <Card sx={{ display: 'flex', margin: '20px 0', backgroundColor: "#F8F8F8", flexDirection:"column"}}> {/* Margin for spacing */}
      <Grid item xs={4}> 
        {imageUrl && (
          <CardMedia
            component="img"
            image={imageUrl}
            alt={suggestion.data[0].title} 
            sx={{ maxWidth: '100%', height: 'auto', objectFit:"cover", maxHeight:219}} // Style the image
          />
        )}
      </Grid>
      <Grid item xs={8} className=" px-4 py-3">
        <CardContent sx={{padding:"0px!important"}}>
          <Typography fontFamily={"Montserrat"} fontWeight={600}  variant="h6" component="p" fontSize={16}>
            {suggestion.data[0].title}
          </Typography>
          {/* Add description if available in your 'suggestion' data */}
          <Typography component={"p"} fontSize={14} fontFamily={"Montserrat"}>
            {suggestion.data[0].description}
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
};