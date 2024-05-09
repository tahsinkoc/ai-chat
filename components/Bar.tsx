'use client';
import React from 'react'

type Props = {}

function Bar({ }: Props) {
    return (
        <div className='w-[22rem] hh bg-main'>
            <h2 className='text-white text-2xl my-2'>KICHS AI.</h2>
            <div className='w-full h-full bg-primary rounded-2xl p-[12px]'>
                <input type="text" placeholder='Search....' className='w-full bg-input rounded-lg py-4 px-4 outline-none border-none text-text' />
                <button className='w-full bg-input rounded-lg py-4 px-4 outline-none border-none text-text my-[12px]'>Clear all chats</button>
                <div className='my-[12px]'>
                    <h2 className='text-text'>Library</h2>
                    <button className='w-full hover:bg-input transition-all duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-start'>Gemma 2B</button>
                </div>
            </div>
        </div >
    )
}

export default Bar