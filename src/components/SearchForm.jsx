import React from "react";
import {
  TextField,
  FormControl,
  FormHelperText,
  Button,
  Grid,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";

export default function SearchForm() {
  const [query, setQuery] = React.useState({
    latitude: "",
    longitude: "",
  });
  const handleChange = (event) => {
    const input = event.target.value;
    setQuery({
      ...query,
      [event.target.query]: input,
    });
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <form className="search-form" Validate autoComplete="off">
          <FormControl>
            <Grid item>
              <TextField
                id="latitude-input"
                label="What's your latitude?"
                value={query.latitude}
                margin="normal"
                variant="outlined"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="longitude-input"
                label="What's your longitude?"
                value={query.longitude}
                variant="outlined"
                margin="normal"
                required
                onChange={handleChange}
                />
            <FormHelperText id="component-helper-text">
              Please type your latitude and longitude above
            </FormHelperText>
                </Grid>
          </FormControl>
          <Grid item>
            <Button
              variant="contained"
              color="tertiary"
              component="span"
              size="large"
              margin="normal"
              startIcon={<Search />}
              onClick={() => {
                alert("clicked");
              }}
            >
              Search
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}
