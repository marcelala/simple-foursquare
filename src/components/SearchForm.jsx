import { React, useState } from "react";
import { TextField, FormControl, Button, Grid } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

export default function SearchForm({}) {
  const [query, setQuery] = useState({
    latitude: "",
    longitude: "",
  });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setQuery({
      ...query,
      [name]: value,
    });
    console.log(query);
  }
  function handleSubmit(event) {}

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <form className="search-form" onSubmit={handleSubmit}>
          <FormControl>
            <Grid item>
              <TextField
                id="latitude-input"
                name="latitude"
                label="What's your latitude?"
                type="text"
                value={query.latitude}
                margin="normal"
                variant="outlined"
                helperText="Please type your latitude above"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="longitude-input"
                name="longitude"
                label="What's your longitude?"
                type="text"
                value={query.longitude}
                variant="outlined"
                margin="normal"
                helperText="Please type your longitude above"
                required
                onChange={handleChange}
              />
            </Grid>
          </FormControl>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              component="span"
              size="large"
              margin="normal"
              startIcon={<Search />}
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}
