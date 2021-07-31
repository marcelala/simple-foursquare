import { useState, useEffect } from "react";

const GeolocationHook = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  // store error message in state
  const [error, setError] = useState();
  
  const location = (latitude,longitude) => [latitude, longitude].toString();
  
    const handleSuccess = (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
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
  
  useEffect(() => {
    location(latitude, longitude);
  }, [latitude, longitude, location]);
  
    return { latitude, longitude, location,  error };
};
  
export default GeolocationHook;
