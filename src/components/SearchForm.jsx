//npm packages
import { React, useState } from "react";
import { TextField, FormControl, Button, Grid } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

//project files
import GeolocationHook from "./GeolocationHook";


export default function SearchForm({ getResults,handleClick }) {
    //local state
  const { currentLatitude: currentLatitude, currentLongitude: currentLongitude, location: currentLocation } = GeolocationHook();
  
  const [input, setInput] = useState({
    latitude: "",
    longitude: "",
  });
// format lat,long
  const [query, setQuery] = useState([]);
 
  //methods
  const validInput = (input) => {
  const onlyDigits = /^-?(([-+]?)([\d]{1,3})((\.)(\d+))?)/.test(input);
    return onlyDigits
  }
  
//Validation of the input, needs more work
  /*
  const getErrors = (input.latitude, input.longitude) => {
    const result = {};
    if (!input.latitude) {
      result.input.latitude = "Latitude is required.";
    } else if (!validInput(input.latitude)) {
      result.input.latitude = "Longitude may only contain numbers and .";
    }
    if (!input.longitude) {
      result.input.longitude = "Longitude is required.";
    } else if (!validInput(input.longitude)) {
      result.input.longitude = "Longitude may only contain numbers and .";
    }
    return result;
  };
  */
  //controlled form
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    }, setQuery(input.latitude+ "," +input.longitude));
  };
//sets the input values on the form and query lat,long
//with the current position
  handleClick=(e)=>{
    e.preventDefault();
    setQuery(currentLocation);
    setInput({
      ...input,
      latitude: currentLatitude,
      longitude: currentLongitude
    });
      };

  return (
    <Grid item>
      <section>
        <form className="search-form" onSubmit={getResults.bind(null, query)}>
          <FormControl>
            <Grid item>
              <TextField
                id="latitude-input"
                name="latitude"
                label="What's your latitude?"
                type="text"
                value={input.latitude}
                margin="normal"
                variant="outlined"
                helperText="Example: 59.334591"
                required
                onChange={handleChange.bind(input)}
              />
            </Grid>
            <Grid item>
              <TextField
                id="longitude-input"
                name="longitude"
                label="What's your longitude?"
                type="text"
                value={input.longitude}
                variant="outlined"
                margin="normal"
                helperText="Example: 18.063240"
                required
                onChange={handleChange.bind(input)}
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
              variant="outlined"
              color="primary"
              component="span"
              size="large"
              margin="normal"
              onClick={handleClick}
            >
              Add current coordinates
            </Button>
          </div>
          </Grid>
        <div>
          </div>
    </section>
          </Grid>
  );
}