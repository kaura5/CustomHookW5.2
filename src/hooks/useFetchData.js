import { useState, useEffect } from 'react';

function useFetchData(url) {

    const [joke, setJoke] = useState({});

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setJoke(data))
            .catch(err => console.log(err))
    }, [url])



    return [joke, setJoke];
}

export default useFetchData;