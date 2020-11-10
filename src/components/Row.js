import React, { useState, useEffect } from 'react'
import axios from '../axios'




function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);


    //   a snippet of code which run based on specific conditions
    useEffect(() => {
        //if [],runs once when the row loads then dont run again
        const fetchData = async () => {
            const reuest = await axios.get(fetchUrl);
        };

        fetchData();

    }, [])


    return (
        <div>
            {/* title */}
            <h2>{title}</h2>
            {/* containre --> posters */}
        </div>
    )
}

export default Row;
