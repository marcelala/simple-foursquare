//NPM packages
import React from 'react';
import {Grid, Container} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
//project files
import Card from './Card';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
}));
  
export default function SearchResult() {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Card key={VenueInfo}/>
                            ))}
                </Grid>
            </Container>
        </div>
    )
}
