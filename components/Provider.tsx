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

    return (
        <div className="flex flex-row">
            <div className="lg:block hidden">
                <Bar messages={messages} setMessages={setMessages} />
            </div>
            <Chat messages={messages} setMessages={setMessages} />
        </div>
    );
}
