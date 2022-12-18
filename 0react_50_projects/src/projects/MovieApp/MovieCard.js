import React from "react";

import "./MovieApp.css";


function MovieCard({imgPath, posterPath, title, getClassByRate, voteAverage, overview}) {

    return (
        <div className="ma-movie">
            <img src={imgPath + posterPath} alt={title} />
            
            <div className="ma-movie-info">
                <h3>{title}</h3>
                <span className={getClassByRate(voteAverage)}>{voteAverage}</span>
            </div>

            <div className="ma-overview">
                <h3>Overview</h3>
                {overview}
            </div>
        </div>
    )
}

export default MovieCard;