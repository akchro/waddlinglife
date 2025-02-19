import {useEffect, useRef} from "react";


const Mycard = ({message, setMessage, submitted, background}) => {

    const textAreaRef = useRef(null);

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set new height
        }
    }, [message]); // Runs when `message` changes

    return (
        <textarea
            ref={textAreaRef}
            readOnly={submitted}
            className="rounded-2xl md:min-h-80 min-h-60 md:w-64 w-48 border text-2xl lg:text-3xl px-5 py-3 font-caveat border-2 border-drab resize-none overflow-hidden focus:outline-none focus:shadow-outline"
            style={{background: background}}
            value={message}
            maxLength={200}
            placeholder={"Write here! (Max length 200 characters)"}
            onChange={(e) => {
                setMessage(e.target.value);
            }}

        />


    );
};

export default Mycard;