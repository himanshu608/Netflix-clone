import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './request'
import './banner.css'
function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailer, setTrailer] = useState('');



    useEffect(() => {
        async function fetchBanner() {
            const reply = await axios.get(requests?.fetchActionMovies)
            setMovie(reply.data.results[Math.floor(Math.random() * reply.data.results.length - 1)])
        }
        fetchBanner();
    }, [])

    function truncateString(str, n) {
        if (str?.length > n) {
            return str.substring(0, n) + "...";
        } else {
            return str;
        }
    }


    return (
        <div className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`
            }}

        >
            <div className="banner_contents_outer">
            <div className="banner_contents">
                <h1>{movie?.original_title || movie?.name || movie?.original_title}</h1>
                <div className="banner_buttons">
                    <button className="banner_button" >
                        Play
                    </button>
                    <button className="banner_button">
                        My List
                    </button>
                </div>

                <div className="banner_desc">
                    <h3>{truncateString(movie?.overview, 250)}</h3>
                </div>

            </div>
            </div>
        </div>

    )
}

export default Banner
