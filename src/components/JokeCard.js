import React, { useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';

function JokeCard() {
    const [joke, setJoke] = useFetchData('https://official-joke-api.appspot.com/random_joke');

    if (Object.keys(joke).length === 0) { return (<p>Please wait</p>) } else {
        return (
            <div>
                <h1>Joke for the day</h1>
                <p>Setup:{joke.setup}</p>
                <p>Punchline:{joke.punchline}</p>
            </div>
        )
    }
}

export default JokeCard;