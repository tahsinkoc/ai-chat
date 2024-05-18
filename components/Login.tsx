'use client';
import Link from 'next/link';
import React from 'react';

type Props = {}

function Login({ }: Props) {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='lg:w-[35rem] w-full p-4 bg-primary text-text rounded-lg'>
                <h3 className='text-xl'>Login</h3>
                <div className='my-4'>
                    <input type="text" className='w-full bg-input outline-none rounded-xl px-2 py-3 my-2' placeholder='Username' />
                    <input type="password" className='w-full bg-input outline-none rounded-xl px-2 py-3 my-2' placeholder='Password' />
                </div>
                <button className='w-full bg-hovercl py-3 rounded-xl hover:bg-input'>
                    Login
                </button>
                <div className='mt-5'>
                    <p>
                        Don`t have account? <Link className='font-extrabold underline' href={'/register'}>
                            Register.
                        </Link>
                    </p>
                    <Link className='font-extrabold underline' href={'/register'}>
                        Forgot your password
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login