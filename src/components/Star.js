import React, { useState } from "react";
import emptyStar from './emptyStar.png';
import completeStar from './completeStar.png';

function Star({whole}) {
    return (
        <img src={whole ? completeStar : emptyStar} className="starSet" alt="star" />
    )
}

export default function Rating() {
    const [starIndex, setStarIndex] = useState(0);
    const [selection, setSelection] = useState(0);

    return (
        <div className="text-center">
            <h4 className="fw-bold">Your Rating</h4>
            <ul className="text-center">
                {[1, 2, 3, 4, 5].map((index) => {
                    return (
                        <li onMouseEnter={() => setStarIndex(index)}
                            onMouseLeave={() => setStarIndex(0)}
                            onClick={() => setSelection(index)}
                            className="starList">
                            <Star whole={(index <= starIndex) || (index <= selection)} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}