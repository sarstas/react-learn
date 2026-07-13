import { ScrollProgress } from './ScrollProgress';

// Моковая страница для проверки ScrollProgress: много секций, чтобы было что скроллить.
export const ScrollProgressDemo = () => {
    const sections = Array.from({ length: 15 }, (_, i) => i + 1);

    return (
        <div>
            <ScrollProgress />
            {sections.map((n) => (
                <section
                    key={n}
                    style={{
                        minHeight: '60vh',
                        padding: '16px',
                        borderBottom: '1px solid #eee',
                    }}
                >
                    <h2>Секция {n}</h2>
                    <p>Прокручивай страницу — полоса вверху показывает прогресс.</p>
                </section>
            ))}
        </div>
    );
};
