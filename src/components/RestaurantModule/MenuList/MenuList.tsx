import type { IMenu } from '../../../interface/menu.interface';
import { DishItem } from "../DishItem/DishItem";

export const MenuList = ({ menu }: { menu: IMenu[] }) => {
    return (
        <>
            <h3>Меню</h3>
            <div>
                {menu.map((dish) => (
                    <DishItem key={dish.id} menu={dish} />
                ))}
            </div>
        </>
    );
};
