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
      const coordinates = navigator.geolocation.getCurrentPosition(
            (position)  => {
                setStatus(null);
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
      ).then(()=> setGeolocationQuery({
        latitude: latitude,
        longitude: longitude,
      },
        () => {
          setStatus("Unable to retrieve your location");
        }
      ));
    }
  };
  return (
    <div>
      <Button onClick={getLocation}>Get your coordinates</Button>
      <p>{status}</p>
        {latitude && <p>Latitude: {latitude}</p>}
        {longitude && <p>Longitude: {longitude}</p>}     
    </div>
  );
}
