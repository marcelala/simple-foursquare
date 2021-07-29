import { TextField } from '@material-ui/core'
import React from 'react'

export default function SearchForm() {
    const [query, setQuery] = React.useState('');
    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <form className="search-form" Validate autoComplete="off">
            <TextField id="outlined-basic" label="latlon" value={query} variant="outlined" required onChange={handleChange}/>
            </form>
        </div>
    )
}
