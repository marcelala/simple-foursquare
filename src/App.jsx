//npm packages
import { React, useState } from "react";
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
  const [data,setData]=useState("");
  const [location, setLocation] = useState("");

  const [query, setQuery] = useState([]);


  //methods
  

  const getResults=(currentLocation) => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "M40Z0XRBE12YDC1RKF5PLQ2ODXMRB0QVK04IOAPAJ1IHZZSM",
      client_secret: "ZW0QO52LFOLOEEO02IRVPD2UGSHU0WEE4Y2FDEUHIE2QLJKC",
      ll: currentLocation,
      v: "20180323"
    };
    axios.get(endPoint + new URLSearchParams(params))
      .then(response => (console.log(response)
      ));
  };

  console.log("coords query:" + query);

  //console.log("q:" + query);
  return (
    <div className="App">
      <Header />
      <Grid container direction= "column" justifyContent="center" alignItems="center">
        <Grid item>
          <Hero />
        </Grid>
        <SearchForm query={query} setQuery={setQuery} getResults={getResults} />
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
            {currentLatitude && <p>Latitude: {currentLatitude}</p>}
            {currentLongitude && <p>Longitude: {currentLongitude}</p>}
            {currentLocation && <p>Current Location: {currentLocation}</p>}
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
