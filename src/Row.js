import React, { useEffect, useState } from 'react'
import './row.css'
import YouTube from 'react-youtube';
import axios from './axios'
import movieTrailer from 'movie-trailer'

const baseUrl = 'https://image.tmdb.org/t/p/original'
function Row({ title, fetchUrl,isLarge }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState('');

    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }
    useEffect(() => {
        async function fetchData() {
            const reply = await axios.get(fetchUrl);
            setMovies(reply.data.results);
            return reply;
        }
        fetchData();
    }, [fetchUrl])

    function handleClick(movie){
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            console.log(movie);
            movieTrailer(movie?.name || movie?.original_title)
            .then((url)=>{
                const urlParm = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParm.get('v'))
            }).catch((error)=>{console.log(error)})
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map((movie) => (
                        <img
                        onClick={()=>handleClick(movie)}
                         key={movie.id} className={`row_poster ${isLarge&& 'row_poster_large'}`} src={`${baseUrl}${isLarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name}></img>
                    ))
                }
            </div>
            <div>
            {console.log(trailerUrl)}
            {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
        </div>
    )
}

export default Row
