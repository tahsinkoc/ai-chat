'use client';
import Link from 'next/link';
import React from 'react';

type Props = {}

function Register({ }: Props) {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='lg:w-[35rem] w-full p-4 bg-primary text-text rounded-lg'>
                <h3 className='text-xl'>Register</h3>
                <div className='my-4'>
                    <input type="text" className='w-full bg-input outline-none rounded-xl px-2 py-3 my-2' placeholder='Mail' />
                    <input type="text" className='w-full bg-input outline-none rounded-xl px-2 py-3 my-2' placeholder='Username' />
                    <input type="password" className='w-full bg-input outline-none rounded-xl px-2 py-3 my-2' placeholder='Password' />
                    <input type="password" className='w-full bg-input outline-none rounded-xl px-2 py-3 my-2' placeholder='Confirm password' />
                </div>
                <button className='w-full bg-hovercl py-3 rounded-xl hover:bg-input'>
                    Register
                </button>
                <div className='mt-5'>
                    <p>
                        Already have account? <Link className='font-extrabold underline' href={'/login'}>
                            Login.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register