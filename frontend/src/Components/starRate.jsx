import { FaStar } from 'react-icons/fa'
import { useState } from 'react';

export default function StarRate({ rating, setRating }) {
     const [hover, setHover] = useState(null);
    return (
        <>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={ratingValue}>
                        <input
                            type="radio"
                            name="rate"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            style={{ display: 'none' }}
                        />
                        <FaStar
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#adadad"}
                            size={30}
                            style={{ cursor: 'pointer', marginRight: 10, transition: 'color 200ms', display: 'inline' }}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </>
    )
}