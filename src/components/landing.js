"use client";

import Card from "@/components/card";
import Mycard from "@/components/mycard";
import {Transition} from "@headlessui/react";
import {useEffect, useState, useRef} from "react";
import getPastelColor from "@/lib/getPastelColor";
import Masonry from "react-masonry-css";
import {fetchRecentMessages, handleSubmit} from "@/lib/server";
import Link from 'next/link'
import Loading from "@/components/loading";



const Landing = () => {

    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    const [userColor, setUserColor] = useState("")
    const [messageList, setMessageList] = useState([])
    const [newMessages, setNewMessages] = useState([]);
    const [lastDoc, setLastDoc] = useState(null);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef(null); // Ref for infinite scrolling

    useEffect(() => {
        if (localStorage.getItem('submitted') === 'true') {
            setSubmitted(true)
            setMessage(localStorage.getItem('message'))
            setUserColor(localStorage.getItem('color'))
        }
    }, []);

    useEffect(() => {
        setUserColor(getPastelColor());
    }, []);

    useEffect(() => {
        // Fetch initial messages
        const loadMessages = async () => {
            setLoading(true);
            const { recentMessages, lastVisible } = await fetchRecentMessages();
            setMessageList(recentMessages);
            setLastDoc(lastVisible);
            setLoading(false);
        };
        loadMessages();
    }, []);

    const loadMoreMessages = async () => {
        if (!lastDoc || loading) return; // Stop if no more messages or already loading

        setLoading(true);
        const { recentMessages, lastVisible } = await fetchRecentMessages(lastDoc);


        setMessageList(prev => [...prev, ...recentMessages]);

        setLastDoc(lastVisible);
        setLoading(false);
    };

    useEffect(() => {
        if (!observerRef.current || !lastDoc) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreMessages();
                }
            },
            { threshold: 1.0 }
        );
        observer.observe(observerRef.current);

        return () => observer.disconnect();
    }, [lastDoc]);

    return (
        <main className={'min-h-screen'}>
            <div className={'m-8'}>
                <h1 className={'text-center  font-bold text-3xl font-playpen '}>Why do you think you&#39;re
                    alive?</h1>
                <h2 className={'text-center font-playpen text-lg mt-3'}>Inspired by <Link href={'/alice'} className={'text-[#0000EE] underline visited:text-[#551A8B]'}>Alice in Borderland</Link></h2>
            </div>
            <div className="flex flex-col items-center gap-5 z-10 absolute left-0 right-0">
                <Mycard message={message} setMessage={setMessage} submitted={submitted} background={userColor}/>
                <Transition show={!submitted}>
                    <button
                        className={'rounded-2xl bg-sage w-64 min-h-16 text-2xl font-playpen border-2 border-drab transition duration-200 ease-in data-[closed]:opacity-0'}
                        onClick={() => handleSubmit(setSubmitted, message, userColor)}
                    >
                        Submit
                    </button>
                </Transition>
            </div>
            {/*A little hack to make the card divs adjust height with the main card div*/}
            <div className={'flex justify-center mb-10'}>
                <Mycard message={message} setMessage={setMessage} submitted={submitted} background={userColor}/>
            </div>
            <div
                className={'transition ease-in-out duration-300'}
                style={{filter: submitted ? 'none' : 'blur(4px)',}}
            >
                <Masonry
                    breakpointCols={{
                        default: 5,
                        1300: 4,
                        1100: 3,
                        700: 2,
                        389: 1,
                    }}
                    className="flex"
                    columnClassName="flex flex-col items-center gap-5"
                >

                    {messageList.map((msg, index) => (
                            <Card key={index} message={msg.message} background={msg.color}/>
                    ))}
                </Masonry>
            </div>
            <div ref={observerRef} className="h-10"></div>
            {loading && <Loading/>}
        </main>
    );
};

export default Landing;