//npm packages
import { React, useState } from "react";
import { TextField, FormControl, Button, Grid } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

//project files
import GeolocationHook from "./GeolocationHook";


export default function SearchForm({ getResults }) {
    //local state
//const { latitude: currentLatitude, longitude: currentLongitude, location: currentLocation } = GeolocationHook();
  const [input, setInput] = useState({
    latitude: "",
    longitude: "",
  });
  const { latitude, longitude } = input
  const [query, setQuery] = useState([]);

  const [errors, setErrors] = useState({});

  //methods
  //controlled form
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    }, setQuery(input.latitude+ "," +input.longitude));
    console.log(query);
  };

  /*handleClick(e){
    e.preventDefault();
    const { latitude: currentLatitude, longitude: currentLongitude, location: currentLocation } = GeolocationHook();
    setQuery(currentLocation)
    setInput({
      ...input,
      [latitude]: currentLatitude,
      [longitude]: currentLongitude,
    });

  };*/


  return (
      <Grid item>
              <section>
        <form className="search-form" onSubmit={getResults.bind(null,query)}>
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
              onClick= {getResults.bind(null,query)}
            >
              Search
            </Button>
          </Grid>
        </form>
        <Grid item>
          <div className="geolocation">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              component="span"
              size="large"
              margin="normal"
              //onClick={handleClick}
            >
              Get your coordinates
            </Button>
          </div>
        </Grid>
        <div>
        </div>
    </section>
              </Grid>
  );
}
        //{currentLocation && <p>Current Location: {currentLocation}</p>}
