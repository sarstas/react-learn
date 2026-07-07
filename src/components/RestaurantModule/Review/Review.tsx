import React from 'react';
import type { IReviews } from "../../../interface/reviews.interface";

export const Review = ({ reviews }: { reviews: IReviews[] }) => {
    return (
        <div>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map((review: IReviews) => (
                    <li key={review.id}>{review.text}</li>
                ))}
            </ul>
        </div>
    );
};
