import { useState } from 'react';
import type { IMenu } from '../../../interface/menu.interface';
import { DishItem } from "../DishItem/DishItem";

export const MenuList = ({ menu }: { menu: IMenu[] }) => {
    const [counts, setCounts] = useState<Record<string, number>>({});

    const setCount = (id: string, value: number) =>
        setCounts((prev) => ({ ...prev, [id]: value }));

    return (
        <>
            <h3>Меню</h3>
            <div>
                {menu.map((dish) => (
                    <DishItem
                        key={dish.id}
                        name={dish.name}
                        count={counts[dish.id] ?? 0}
                        onChange={(value) => setCount(dish.id, value)}
                    />
                ))}
            </div>
        </>
    );
};
