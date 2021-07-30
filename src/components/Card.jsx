//NPM packages
import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core/";

//project files
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
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
export default function Card({ venueInfo }) {
  //constants
    const { name, distance, adress, latitude, longitude, category } = venue;
    const classes = useStyles();
  return (
    <div>
      <Grid item key={card} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {venueInfo.name}
            </Typography>
            <Typography>{venueInfo.distance}</Typography>
            <Typography>{venueInfo.address}</Typography>
            <Typography>{venueInfo.category}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
