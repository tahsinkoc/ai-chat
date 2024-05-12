'use client';
import React, { useEffect, useState, KeyboardEvent, useRef } from 'react'
import Notification from './Notification';
type Props = {}

type Who = {
    who: string,
    text: string
}

function Chat({ messages, setMessages, model }: any) {

    const [inputMessage, setInputMessage] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false)
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        const diva = scrollRef.current;
        //@ts-ignore
        diva.scrollTop = diva.scrollHeight + 340;
        // scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSubmit = async () => {
        setLoading(true);
        //@ts-ignore
        setMessages(current => [...current, { who: 'client', text: inputMessage }])
        let response = await fetch('http://localhost:11434/api/generate', { method: 'POST', body: JSON.stringify({ model: model, prompt: inputMessage, stream: false }) })
        let parsed = await response.json();
        setInputMessage('');
        //@ts-ignore
        setMessages(current => [...current, { who: 'server', text: parsed.response }])
        setLoading(false);
        scrollToBottom()
    }

    const test = () => {
        //@ts-ignore
        setMessages(current => [...current, { who: 'server', text: inputMessage }])
    }
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className='w-full bg-primary lg:ml-[20px] ml-0 rounded-xl hh my-[48px] relative px-[20px] overflow-x-hidden'>
            {isLoading && <Notification />}
            <div ref={scrollRef} className='w-full absolute bottom-0 justify-between pb-[100px] pr-10 overflow-y-scroll h-full sh'>
                {/* @ts-ignore */}
                {messages?.map((item) => (
                    <div className={item.who == 'server' ? 'w-full flex flex-col items-start' : 'w-full flex flex-col  items-end'}>
                        <div className={item.who == 'server' ? 'text-text bg-box p-4 rounded-lg my-2 lg:w-6/12 w-full float-right' : 'text-text lg:bg-box bg-[#36363a] p-4 rounded-lg my-2 lg:w-6/12 w-full float-right'}>
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-[0px] wc pb-[20px] flex items-center gap-x-4 bg-primary'>
                <input onKeyDown={handleKeyPress} value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} type="text" className='text-text bg-input wc border-none outline-none rounded-xl p-4' placeholder='Let the magic begin, Ask a question' />
                <button disabled={isLoading} onClick={handleSubmit} className='text-text bg-input p-4 rounded-xl mr-4 hover:bg-[#36363a]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Chat