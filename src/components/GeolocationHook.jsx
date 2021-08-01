import { useState, useEffect } from "react";

const GeolocationHook = () => {
  const [location, setLocation] = useState([]);


  // store error message in state
  const [error, setError] = useState();
  const [currentLatitude, setLatitude] = useState("");
  const [currentLongitude, setLongitude] = useState("");
  
  const handleSuccess = (position) => {
    const latitude = (position.coords.latitude).toString();
    const longitude = (position.coords.longitude).toString();
    setLatitude(latitude);
    setLongitude(longitude);
    setLocation(latitude + "," + longitude);
    };
  
    const handleError = (error) => {
      setError(error.message);
    };
    
  useEffect(() => {
      const { geolocation } = navigator;
        if (!geolocation) {
        setError("Geolocation is not supported.");
        return;
      }
      // Call Geolocation API
    geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);
    return { location,currentLatitude, currentLongitude, error };
};
  
export default GeolocationHook;
