import React from 'react';
import Reviews from './Reviews';

export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props);
        this.movieList = props.movies;
    }
    render() {
        return (
            <div>
                {this.movieList.map((movie, index) => (
                    <div className='container-lg movies-container' key={index}>
                        <div className='movie-info row'>
                            <div className='col-1'>
                                <img src={movie.anotherImage} alt={movie.title} />
                            </div>
                            <div className='col-8'>
                                <h4>{movie.title}</h4>
                                <p>A {movie.year} {movie.type} film directed by {movie.director}.</p>
                                <p>{movie.synopsis}</p>
                            </div>
                        </div>
                        <div className='reviews-container row'>
                            <Reviews />
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}