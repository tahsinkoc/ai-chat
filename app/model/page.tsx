import Link from 'next/link'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <div className="w-full h-screen fixed top-0 left-0 z-[9999] bg-primary flex items-center justify-center flex-col">
            <Link href={'/'} className='fixed left-10 top-10 text-text bg-input p-4 rounded-lg shadow-md shadow-black'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
            </Link>
            <p className='text-center my-3 text-text text-2xl'>It looks like Ollama is not running or the gemma:2b model have not downloaded.</p>
            <p className='text-center my-3 text-text text-2xl'>If ollama already running you may try to run this command in your command prompt.</p>
            <div className='text-text shadow-inner shadow-black text-green-600 my-3 bg-input py-3 px-12 rounded-md'>
                ollama pull gemma:2b
            </div>
        </div>
    )
}

export default page