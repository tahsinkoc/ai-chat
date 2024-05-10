'use client'
import Bar from "@/components/Bar";
import Chat from "@/components/Chat";
import Image from "next/image";
import { useState } from 'react';

type Who = {
    who: string,
    text: string
}
export default function Provider() {
    const [messages, setMessages] = useState<Who[]>([]);
    const [isOpen, setOpen] = useState<boolean>(false);
    return (
        <div className="flex flex-row">
            <div className={isOpen ? "left-0 lg:relative fixed z-50 h-screen top-0 shh transition-all duration-500" : "shh left-[-100%] top-0 lg:left-0 lg:relative h-screen fixed z-50 transition-all duration-500"}>
                <Bar messages={messages} setMessages={setMessages} isOpen={isOpen} setOpen={setOpen} />
            </div>
            <div className="w-full">
                <div className="w-full lg:hidden flex justify-between items-center bg-primary text-text py-2 px-4 rounded-lg">
                    <button onClick={() => setOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <Image src={'/ailogo.png'} alt="logo" width={70} height={70} />
                </div>
                <Chat messages={messages} setMessages={setMessages} />
            </div>
        </div>
    );
}
