import React from 'react';
import './Footer.scss'

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <span>© {year} Top restaurant.</span>
        </div>
    );
};