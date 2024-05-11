import React from 'react'
import Link from 'next/link'

type Props = {}

function page({ }: Props) {
    return (
        <div className="w-full h-screen fixed top-0 left-0 z-[9999] bg-primary flex items-center justify-center flex-col">
            <Link href={'/'} className='fixed left-10 top-10 text-text bg-input p-4 rounded-lg shadow-md shadow-black'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
            </Link>
            <p className='text-center my-3 text-text text-2xl'>It looks like ollama is not installed at your computer. You can quickly download it by using this button.</p>
            <a target='_blank' href="https://ollama.com/download">
                <button className='text-text hover:bg-hovercl my-3 bg-input py-3 px-12 rounded-md'>
                    Download
                </button>
            </a>
        </div>
    )
}

export default page