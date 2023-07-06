import React from 'react';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.movieList = props.movies;
    }

    render() {
        return (
            <div>
                <h3>Current Trending Movies: </h3>
                <span>
                    {this.movieList.map((movie, index) => (
                        <img src={movie.image} key={index} alt={movie.title} className='thumbnails'/>
                    ))}
                </span>
            </div>
        )
    }
}