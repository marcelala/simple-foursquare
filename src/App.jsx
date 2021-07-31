//npm packages
import { React, useState, useEffect,useReducer } from "react";
import axios from "axios";
import { Grid, Button, makestyles } from "@material-ui/core";

//project files
import GeolocationHook from "./components/GeolocationHook";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";



export default function App() {
  //state
  const { latitude: currentLatitude, longitude: currentLongitude, location: currentLocation } = GeolocationHook();
  //const [latitude, setLatitude] = useState("");
  //const [longitude, setLongitude] = useState("");
  
  const currentCoordinates =([currentLatitude, currentLongitude]).toString();

  const [query, setQuery] = useState({
    latitude: "",
    longitude: "",
  });
  const [geolocationStatus, setGeolocationStatus] = useState();


  //methods
  

  const getVenues=(currentCoordinates) => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "M40Z0XRBE12YDC1RKF5PLQ2ODXMRB0QVK04IOAPAJ1IHZZSM",
      client_secret: "ZW0QO52LFOLOEEO02IRVPD2UGSHU0WEE4Y2FDEUHIE2QLJKC",
      ll: this.currentCoordinates,
      v: "20180323"
    };
    axios.get(endPoint + new URLSearchParams(params))
      .then(response => (console.log(response)
      ));
  };



  /*useEffect(() => {
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

console.log("coords:" + currentCoordinates);*/



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
            {currentLatitude && <p>Latitude: {currentLatitude}</p>}
            {currentLongitude && <p>Longitude: {currentLongitude}</p>}
            {currentCoordinates && <p>Current Coordinates: {currentCoordinates}</p>}
            {currentLocation && <p>Current Location: {currentLocation}</p>}

          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
