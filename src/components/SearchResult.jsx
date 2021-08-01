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
    const venueArray= results.map((venue) => (
    <VenueCard key={venue.id} venue={venue}/>
    ))
    if (!results)
		return (
			<div>
				<alert color="warning">Nothing Found!</alert>
			</div>
		);
    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {venueArray}
                </Grid>
            </Container>
        </div>
    )
}
