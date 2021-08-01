//NPM packages
import React from 'react';
import { Grid, Container,makeStyles } from '@material-ui/core/';

//project files
import VenueCard from './VenueCard';
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
  }));
export default function SearchResult( {results}) {
    const classes = useStyles();
    //unsorted array of venue Cards
    const venueCards = results.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
    ));

    const sortedVenueArray = results.sort((a,b) => a.location.distance < b.location.distance? -1:1);
    
    const sortedVenueCards= sortedVenueArray.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
    ));

    
    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {results?  sortedVenueCards : <p> No venues were found...</p>}
                </Grid>
            </Container>
        </div>
    )
}
