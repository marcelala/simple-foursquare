//npm packages
import { React, useState, useEffect,useReducer } from "react";
import axios from "axios";
import { Grid, Button, makestyles } from "@material-ui/core";

//project files
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";

const endPoint = "https://api.foursquare.com/v2/venues/explore?";

export default function App() {
  //state
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [currentCoordinates, setCoordinates] = useState({
    currentLatitude: "",
    currentLongitude: ""
  });
  const [query, setQuery] = useState({
    latitude: "",
    longitude: "",
  });
  const [geolocationStatus, setGeolocationStatus] = useState(null);

  //methods

  //based on js in plain english implementation
useEffect(() => {
    if (!navigator.geolocation) {
      setGeolocationStatus("Geolocation is not supported by your browser");
      return;
    } else {
      setGeolocationStatus("Locating...");
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocationStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setCoordinates({
            currentLatitude: position.coords.latitude,
            currentLongitude: position.coords.longitude
          });
        },
        );
      }
  setGeolocationStatus("Unable to retrieve your location");
  },[]);

console.log("coords:" + currentCoordinates);



  //console.log("q:" + query);
  //console.log("c:" + coordinates);
  //console.log("coords:" + currentCoordinates);



  return (
    <div className="App">
      <Header />
      <Grid container direction= "column" justifyContent="center" alignItems="center">
        <Grid item>
          <Hero />
        </Grid>
        <SearchForm query={query} setQuery={setQuery} />
        <Grid item>
          <div className="geolocation">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              component="span"
              size="large"
              margin="normal"
            >
              Get your coordinates
            </Button>
            <p>{geolocationStatus}</p>
            {latitude && <p>Latitude: {latitude}</p>}
            {longitude && <p>Longitude: {longitude}</p>}
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
