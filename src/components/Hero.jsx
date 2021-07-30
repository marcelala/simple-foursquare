//npm packages
import React from "react";
import { Container, Typography } from "@material-ui/core";

export default function Hero() {
  return (
    <div className="hero">
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Simple Square
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  This is a simple app to help you find services near you. All you have to do is input your coordinates below.
                  This app is powered by Foursquare.
        </Typography>
      </Container>
    </div>
  );
}
