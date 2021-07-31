import { useState, useEffect } from "react";

const GeolocationHook = () => {
  const [location, setLocation] = useState([]);


  // store error message in state
  const [error, setError] = useState();
    
  const handleSuccess = (position) => {
    const currentLatitude = position.coords.latitude;
    const currentLongitude = position.coords.longitude;
    setLocation(currentLatitude+","+currentLongitude);
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
    return { location, error };
};
  
export default GeolocationHook;
