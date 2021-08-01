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
    },
}));
//project files
export default function VenueCard({ venue }) {
  //constants
  const { name, id, distance, address, latitude, longitude, category } = venue;
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
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>{distance}</Typography>
            <Typography>{address}</Typography>
            <Typography>{category}</Typography>
          </CardContent>
        </Card>
      </Grid>
  );
}
