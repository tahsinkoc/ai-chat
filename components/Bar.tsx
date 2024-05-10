'use client';
import Image from 'next/image';
import React from 'react'


function Bar({ messages, setMessages, setOpen, isOpen }: any) {
    return (
        <div className='w-[22rem] hh lg:bg-main bg-primary rounded-xl'>
            <div className='flex items-center lg:justify-start justify-between lg:p-0 p-5'>
                <Image src={'/ailogo.png'} width={35} height={35} alt='logo' className='lg:block hidden' />
                <h2 className='text-white text-2xl my-2 ml-2'>KICHS AI.</h2>
                <button className='text-text lg:hidden block' onClick={() => setOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className='w-full h-full bg-primary rounded-2xl p-[12px]'>
                <input type="text" placeholder='Search....' className='w-full bg-input rounded-lg py-4 px-4 outline-none border-none text-text' />
                <button onClick={() => setMessages([])} className='w-full bg-input rounded-lg hover:bg-[#36363a] py-4 px-4 outline-none border-none text-text my-[12px]'>Clear all messages</button>
                <div className='my-[12px]'>
                    <h2 className='text-text'>Library</h2>
                    <button className='w-full hover:bg-input transition-all duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-start'>Gemma 2B</button>
                </div>
            </div>
        </div >
    )
}

export default Bar