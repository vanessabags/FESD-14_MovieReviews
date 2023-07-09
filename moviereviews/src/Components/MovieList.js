import React from 'react';
import MovieArray from './MovieArray';

export default class MovieList extends React.Component {

    render() {
        return (
            <div>
                <h3>Current Trending Movies: </h3>
                <span>
                    {MovieArray.map((movie, index) => (
                        <img src={movie.image} key={index} alt={movie.title} className='thumbnails'/>
                    ))}
                </span>
            </div>
        )
    }
}