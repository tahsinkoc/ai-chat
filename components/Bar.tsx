'use client';
import Image from 'next/image';
import React from 'react'


function Bar({ messages, setMessages }: any) {
    return (
        <div className='w-[22rem] hh bg-main'>
            <div className='flex items-center'>
                <Image src={'/ailogo.png'} width={35} height={35} alt='logo' />
                <h2 className='text-white text-2xl my-2 ml-2'>KICHS AI.</h2>
            </div>
            <div className='w-full h-full bg-primary rounded-2xl p-[12px]'>
                <input type="text" placeholder='Search....' className='w-full bg-input rounded-lg py-4 px-4 outline-none border-none text-text' />
                <button onClick={() => setMessages([])} className='w-full bg-input rounded-lg py-4 px-4 outline-none border-none text-text my-[12px]'>Clear all messages</button>
                <div className='my-[12px]'>
                    <h2 className='text-text'>Library</h2>
                    <button className='w-full hover:bg-input transition-all duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-start'>Gemma 2B</button>
                </div>
            </div>
        </div >
    )
}

export default Bar