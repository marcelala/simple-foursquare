import { Link, Typography, Grid } from "@material-ui/core";
import React from "react";
import  Foursquare  from '../assets/powered-by-foursquare-grey.png';

export default function Footer() {
    const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Simple Square
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };
  return (
    <footer>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        margin="normal"
      >
        <Grid item xs>
        <img src= { Foursquare } className="attribution" alt="text powered by foursquare"/>        
        </Grid>
        <Grid item>{Copyright()}</Grid>
      </Grid>
    </footer>
  );
}
