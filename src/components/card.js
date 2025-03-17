import { useState, useEffect } from 'react';

const Card = ({ message, background }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in effect after the component mounts
        setIsVisible(true)
    }, []);

    return (
        <div
            className={`rounded-2xl min-h-32 md:w-64 w-44 border text-xl md:text-3xl px-5 py-3 font-caveat border-2 border-drab break-inside-avoid transition-all duration-1000 ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
            }`}
            style={{background: background}}
        >
            {message}
        </div>
    );
};

export default Card;
