import React from 'react';
import './NotFound.scss'

export const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__code">404</h1>
            <p className="not-found__text">Страница не найдена</p>
        </div>
    );
};