import { PropsWithChildren } from 'react';

const Section = ({
    children,
    image,
    color,
}: PropsWithChildren & { image?: string; color?: string }) => {
    return (
        <section
            className="py-4 md:py-8"
            style={{
                backgroundImage: image ? `url(${image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: color || 'transparent',
            }}
        >
            {children}
        </section>
    );
};

export default Section;
