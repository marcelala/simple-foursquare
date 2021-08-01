//npm packages
import { React, useState } from "react";
import axios from "axios";
import { Grid} from "@material-ui/core";

//project files
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import BackupData from './assets/BackupData.json'
import SearchResult from "./components/SearchResult";


export default function App() {
  //state
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(0); // 0 = "loading", 1 = "data ok", 2 = "data error"
  const DEBUG_MODE = false; // to show backup data in case of a server failure.

  //methods

  const getResults=(query) => {
    const endPoint = "https://api.foursquare.com/v2/venues/search?";
    const params = {
      ll: query,
      client_id: "M40Z0XRBE12YDC1RKF5PLQ2ODXMRB0QVK04IOAPAJ1IHZZSM",
      client_secret: "ZW0QO52LFOLOEEO02IRVPD2UGSHU0WEE4Y2FDEUHIE2QLJKC",
      v: "20180323",
      limit:10,
    };
    axios.get(endPoint + new URLSearchParams(params))
      .then(response => setResults(response.data.response.venues))
      .catch((error) => onFail(error));
  };

  function onFail(error) {
    if (DEBUG_MODE) {
      setResults(BackupData);
      setStatus(1);
    } else {
      setStatus(2);
    }
  }
  return (
    <div className="App">
      <Header />
      <Grid container direction= "column" justifyContent="center" alignItems="center">
        <Grid item>
          <Hero />
        </Grid>
        <SearchForm getResults={getResults} />
        {results && <SearchResult results={results}/>}
      </Grid>
      <Footer />
    </div>
  );
}
