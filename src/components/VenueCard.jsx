//NPM packages
import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  makeStyles,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    justifySelf: "center",
  },
}));
//project files
export default function VenueCard({ venue }) {
  //constants
  const { name, location} = venue;
  const classes = useStyles();

  return (
    <Grid item key={VenueCard} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom align="center" variant="h5" component="h2">
            {name}
          </Typography>
          {location.distance && <Typography align="center" component="p">Distance: {location.distance} meters</Typography>}
          <br/>
          <Typography variant="body2" color="textSecondary" component="p" >Lat {location.lat} </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >Lng {location.lng}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{location.address}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{location.postalCode}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{location.city}, {location.country}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{location.url}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
