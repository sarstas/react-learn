import './DishItem.scss'

type Props = {
    name: string;
    count: number;
    min?: number;
    max?: number;
    onChange: (value: number) => void;
};

export const DishItem = ({ name, count, min = 0, max = 5, onChange }: Props) => {
    const decrement = () => onChange(Math.max(min, count - 1));
    const increment = () => onChange(Math.min(max, count + 1));

    return (
        <div className="dish-item">
            <span className="dish-item__name">{name}</span>
            <button type="button" onClick={decrement}>-</button>
            <span className="dish-item__count">{count}</span>
            <button type="button" onClick={increment}>+</button>
        </div>
    );
};
