//npm packages
import { React, useState, useEffect } from "react";
import { TextField, FormControl, Button, Grid } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

//project files

export default function SearchForm({ query, setQuery }) {
    //local state
  const [errors, setErrors] = useState({});
  const { latitude: latitude, longitude: longitude } = query;

  //methods

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setQuery({
      ...query,
      [name]: value,
    });
    console.log(query);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      await getResults();
    }
  };

  const isValid = () => {
    Object.values(errors).every((x) => x === "");
  };

  const getResults = () => {};

  return (
      <Grid item>
              <section>
        <form className="search-form" onSubmit={handleSubmit}>
          <FormControl>
            <Grid item>
              <TextField
                id="latitude-input"
                name="latitude"
                label="What's your latitude?"
                type="text"
                value={latitude}
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
                value={longitude}
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
    </section>
              </Grid>
  );
}
