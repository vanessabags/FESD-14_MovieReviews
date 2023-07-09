import StarFill from '../icon-star-fill.png';

export default function StarRated(index) {
    return (
        [...Array(index)].map((e, i) => <img src={StarFill} key={i} alt='star rating' />)
    );    
}
{/* with the index, it is suppose to make an empty array of the index amount and create that number of stars with the map element */}