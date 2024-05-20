'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Popup from './Popup';


function Bar({ messages, setMessages, setOpen, isOpen, setUpdate, update, setModel }: any) {

    const [popup, setPopup] = useState<boolean>(false)
    const [clickedBtn, setClicked] = useState<number | null>(null);
    const [models, setModels] = useState([]);

    const handleClick = (item: object, index: number,) => {
        setClicked(index);
        // @ts-ignore
        setModel(item);
    }

    const handleDelete = (index: number) => {
        let mods = models;
        mods.splice(index, 1);
        localStorage.setItem('models', JSON.stringify(mods))
        setUpdate(!update)
    }

    useEffect(() => {
        let modelas = localStorage.getItem('models');
        if (modelas) {
            let parsed = JSON.parse(modelas);
            setModels(parsed)
        }
    }, [update])

    return (
        <div className='w-[22rem] hh lg:bg-main bg-primary rounded-xl relative'>
            <Popup setUpdate={setUpdate} update={update} isOpen={popup} setOpen={setPopup} />
            <div className='flex items-center lg:justify-start justify-between lg:p-0 p-5 relative'>
                <Image src={'/ailogo.png'} width={35} height={35} alt='logo' className='lg:block hidden' />
                <h2 className='text-white text-2xl my-2 ml-2'>KICHS AI.</h2>
                <button className='text-text lg:hidden block' onClick={() => setOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className='w-full hh bg-primary rounded-2xl relative'>
                <div className='relative top-0 z-20 p-[12px]'>
                    <input type="text" placeholder='Search....' className='w-full bg-input rounded-lg py-4 px-4 outline-none border-none text-text' />
                    <button onClick={() => setMessages([])} className='w-full bg-input rounded-lg hover:bg-[#36363a] py-4 px-4 outline-none border-none text-text my-[12px]'>Clear all messages</button>
                    <h2 className='text-text'>Library</h2>
                </div>
                <div className='relative hhs overflow-y-scroll px-3'>
                    <div className='w-full flex flex-row'>
                        <button onClick={() => { setModel('gemma:2b'), setClicked(null) }} className='w-full hover:bg-input transition-all duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-start'>Gemma 2B</button>
                        <button className='transition-all hover:text-red-700 ml-1 bg-input duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                    {
                        models && models.map((item, index) => (
                            <div className='w-full flex flex-row'>
                                {/* @ts-ignore */}
                                <button onClick={() => handleClick(item, index)} className={clickedBtn == index ? 'w-full bg-input transition-all duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-start' : 'w-full hover:bg-input transition-all duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-start'}>{item.displayName}</button>
                                <button onClick={() => handleDelete(index)} className='transition-all hover:text-red-700 ml-1 bg-input duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    }
                    <div className='w-full px-3 lg:hidden block bottom-0'>
                        <button onClick={() => setPopup(true)} className='flex items-center justify-center w-full hover:bg-hovercl bg-input transition-all duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-center'>
                            Add Model
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='w-full lg:block hidden relative px-3 bottom-0'>
                    <button onClick={() => setPopup(true)} className='flex items-center justify-center w-full hover:bg-hovercl bg-input transition-all duration-300 rounded-lg py-4 px-4 outline-none border-none text-text my-[12px] text-center'>
                        Add Model
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            </div>

        </div >
    )
}

export default Bar