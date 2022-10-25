import { useState } from 'react';

export default function SearchForm (props) {

    let [ movieName, setMovieName ] = useState('')

    const handleChange = (e) => {
        setMovieName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('testing')
        // props.getMovie
        props.getMovie(movieName)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={movieName} onChange={handleChange} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}