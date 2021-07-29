import { Link, Typography, Grid } from "@material-ui/core";
import React from "react";

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
        <Grid item>
          <Typography variant="h6" align="center" gutterBottom>
            Simple Square
          </Typography>
        </Grid>
        <Grid item></Grid>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Grid item>{Copyright()}</Grid>
      </Grid>
    </footer>
  );
}
