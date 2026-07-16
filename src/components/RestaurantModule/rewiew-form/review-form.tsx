import * as React from 'react';
import { useForm } from './use-form';
import { DishItem } from "../DishItem/DishItem";
import './ReviewForm.scss';

type Props = {
    restaurantId: number;
};

const MIN_RATING = 1;
const MAX_RATING = 5;

export const ReviewForm = (props: Props) => {
    const { state, setName, setRating, setText, reset } = useForm();
    const { name, rating, text } = state;
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Новый отзыв ', state);
        reset();
    }

    return (
        <form className={'review-form'} onSubmit={onSubmit}>
            <div>
                <span>Имя</span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <span>Комментарий</span>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <DishItem
                    name="Рейтинг"
                    count={rating}
                    min={MIN_RATING}
                    max={MAX_RATING}
                    onChange={setRating}
                />
            </div>

            <button type="submit">Отправить</button>
        </form>
    );
};
