import React from 'react';
import type { IMenu } from '../../../interface/menu.interface';

export const MenuList = ({menu}: { menu: IMenu }) => {
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
};