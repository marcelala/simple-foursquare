import { useState, useEffect } from "react";

const GeolocationHook = () => {
    const [location, setLocation] = useState("");
    // store error message in state
    const [error, setError] = useState();
  
    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation(
        [latitude,
        longitude]
        );
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
