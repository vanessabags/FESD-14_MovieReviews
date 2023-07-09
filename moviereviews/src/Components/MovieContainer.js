import React from 'react';
import MovieArray from './MovieArray';
import ReviewForm from './ReviewForm';


export default function MovieContainer() {

    return (
        <div>
            {MovieArray.map((movie, index) => (
                <div className='container-lg movies-container' key={index}>
                    <div className='movie-info row'>
                        <div className='col-1'>
                            <img src={movie.anotherImage} alt={movie.title} className='movie-image'/>
                        </div>
                        <div className='col-8'>
                            <h4>{movie.title}</h4>
                            <p>A {movie.year} {movie.type} film directed by {movie.director}.</p>
                            <p>{movie.synopsis}</p>
                        </div>
                    </div>
                    <div className='reviews-container row'>
                        <ReviewForm movie={movie.index} />
                        
                    </div>
                </div>
            ))}
        </div>
    )

}