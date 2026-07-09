import { useState } from 'react';
import './DishItem.scss'
import type { IMenu } from "../../../interface/menu.interface.ts";

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const DishItem = ({ menu }: { menu: IMenu }) => {
    const [count, setCount] = useState(MIN_COUNT);

    const decrement = () => setCount((prev) => Math.max(MIN_COUNT, prev - 1));
    const increment = () => setCount((prev) => Math.min(MAX_COUNT, prev + 1));

    return (
        <>
            <div className="dish-item">
                <span>{menu.name}</span>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};