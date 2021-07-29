import React from 'react'
import { TextField, FormControl, FormHelperText, Button } from '@material-ui/core'
import Search from '@material-ui/icons/Search';


export default function SearchForm() {
    const [query, setQuery] = React.useState({
        latitude: "",
        longitude: "",
    });
    const handleChange = (event) => {
        const input = event.target.value;
        setQuery({
            ...query,
            [event.target.query]: input
        });
    };

    return (
        <div>
            <form className="search-form" Validate autoComplete="off">
            <FormControl>
                    <TextField id="latitude-input" label="What's your latitude?" value={query.latitude} variant="outlined" required onChange={handleChange} />
                    <TextField id="longitude-input" label="What's your longitude?" value={query.longitude} variant="outlined" required onChange={handleChange} />
                <FormHelperText id="component-helper-text">Please type your latitude and longitude above</FormHelperText>
                </FormControl>
                <Button
                    variant="contained"
                    color="tertiary"
                    component="span"
                    size="large"
                    startIcon={<Search/>}
                    onClick={() => { alert('clicked') }}>
                    Search
                </Button>
            </form>
        </div>
    )
}
