import {useEffect, useState} from "react";

const Loading = () => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return <p className="text-2xl font-playpen text-center">Loading{dots}</p>;
};

export default Loading;