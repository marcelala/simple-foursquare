//npm packages
import {React, useState} from "react";
import { Button } from "@material-ui/core";

export default function Geolocation() {
  //state
const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);
const [geolocationQuery, setGeolocationQuery] = useState({
        latitude: "",
        longitude: "",
      });
  const [status, setStatus] = useState(null);

  //methods
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          },
          setGeolocationQuery({
            ...geolocationQuery,
            latitude: {latitude},
            longitude: {longitude}
          },
          console.log(geolocationQuery),
          ),
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  return (
    <div>
      <Button onClick={getLocation}>Get coordinates</Button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {latitude && <p>Latitude: {latitude}</p>}
    {longitude && <p>Longitude: {longitude}</p>}     
    </div>
  );
}
