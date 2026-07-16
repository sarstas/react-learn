import { useEffect, useState } from 'react';
import './ScrollProgress.scss';

export const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-prog ress">
            <div
                className="scroll-progress__bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};
