//npm packages
import { React, useState } from "react";
import { TextField, FormControl, Button, Grid } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

//project files
import Geolocation from "./Geolocation";

export default function SearchForm({ geolocationQuery }) {
  //state
  const [query, setQuery] = useState({
    latitude: "",
    longitude: "",
  });
  const [errors, setErrors] = useState({});
  //methods
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setQuery({
      ...query,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      await getResults(query);
    }
  };

  const isValid = () => {
    Object.values(errors).every((x) => x === "");
  };

  const getResults = () => {};

  if ({ geolocationQuery } == !null) {
    setQuery(query == { geolocationQuery });
  }
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
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
          <Grid item>
            <Geolocation />
          </Grid>
        </form>
      </Grid>
    </div>
  );
}
