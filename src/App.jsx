//npm packages
import { React, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

//project files
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
const baseURL = "https://api.foursquare.com/v2/venues/explore/";

export default function App() {
  //state
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [query, setQuery] = useState({
    latitude: "",
    longitude: "",
  });
  const [geolocationStatus, setGeolocationStatus] = useState(null);

  //methods
  const getLocation = () => {
    if (!navigator.geolocation) {
      setGeolocationStatus("Geolocation is not supported by your browser");
    } else {
      setGeolocationStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocationStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        setQuery({
          ...query,
          latitude: { latitude },
          longitude: { longitude },
        }),
        () => {
          setGeolocationStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <div className="App">
      
      <Header />
      <Hero />
      <div className="geolocation">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          component="span"
          size="large"
          margin="normal"
          onClick={getLocation}
        >
          Get your coordinates
        </Button>
        <p>{geolocationStatus}</p>
        {latitude && <p>Latitude: {latitude}</p>}
        {longitude && <p>Longitude: {longitude}</p>}
      </div>
      <Footer />
    </div>
  );
}
