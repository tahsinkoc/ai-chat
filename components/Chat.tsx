'use client';
import React, { useEffect, useState, KeyboardEvent, useRef } from 'react'
import Notification from './Notification';
type Props = {}

type Who = {
    who: string,
    text: string
}

function Chat({ messages, setMessages, model }: any) {

    const fileRef = useRef(null);

    const [inputMessage, setInputMessage] = useState<string>('');
    const [image, setImage] = useState(null);
    const [file, setFile] = useState('');
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
        if (image) {
            console.log(image);
            let response = await fetch('http://localhost:11434/api/generate', {
                method: 'POST',
                body: JSON.stringify({
                    model: model.model,
                    prompt: inputMessage,
                    stream: false,
                    images: [image]
                })
            })
            let parsed = await response.json();
            //@ts-ignore
            setMessages(current => [...current, { who: 'server', text: parsed.response }])
        } else {
            let response = await fetch('http://localhost:11434/api/generate', {
                method: 'POST',
                body: JSON.stringify({
                    model: model.model,
                    prompt: inputMessage,
                    stream: false
                })
            })
            let parsed = await response.json();
            //@ts-ignore
            setMessages(current => [...current, { who: 'server', text: parsed.response }])
        }

        setInputMessage('');
        //@ts-ignore
        setLoading(false);
        scrollToBottom()
    }

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Resmi base64 formatına dönüştürme
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
            const base64Data = reader.result?.toString(); // data:image/png;base64, kısmını kaldır
            // @ts-ignore
            setImage(base64Data);
            console.log(base64Data);
        };

    };

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
                <input ref={fileRef} onChange={handleFileChange} type="file" className='hidden' id='foc' />
                {/* @ts-ignore */}
                {
                    // @ts-ignore
                    model.includesImage ? <button onClick={() => fileRef.current.click()} className='text-text bg-input p-4 rounded-xl hover:bg-[#36363a]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                    </button> : <></>
                }
                <button disabled={isLoading} onClick={handleSubmit} className='text-text bg-input p-4 rounded-xl hover:bg-[#36363a] mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Chat