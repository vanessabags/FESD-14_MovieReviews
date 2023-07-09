import StarFill from '../icon-star-fill.png';
import Star from '../icon-star.png';
import { useState } from 'react';

const starsArray = [1, 2, 3, 4, 5];
function Rating({ filled }) {
    return (
        <img src={filled ? StarFill : Star} className='starRating' alt="star rating"/>
    )
}

export default function StarRating() {
    const [starIndex, setStarIndex] = useState(0);
    const [selection, setSelection] = useState(0);

    return (
        <div>
            {starsArray.map((index) => {
                return (
                    <span onMouseEnter={() => setStarIndex(index)}
                        onMouseDown={() => setStarIndex(0)}
                        onClick={() => setSelection(index)}
                        id={index}>
                        <Rating filled={(index <= starIndex) || (index <= selection)} />
                    </span>
                )
            })}
        </div>
    )
}