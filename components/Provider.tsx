'use client'
import Bar from "@/components/Bar";
import Chat from "@/components/Chat";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

type Who = {
    who: string,
    text: string
}
export default function Provider() {
    const router = useRouter();
    const [messages, setMessages] = useState<Who[]>([]);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [loader, setLoader] = useState<boolean>(true);
    const [loaderMessage, setLoaderMessage] = useState('Just a sec, We checking ollama is installed on your computer or not.');
    const [model, setModel] = useState<object>({
        model: 'gemma:2b',
        includesImage: false
    });
    const [update, setUpdate] = useState<boolean>(false);

    useEffect(() => {
        fetch('/api/check')
            .then(res => res.json())
            .then(res => {
                if (res.message) {
                    setLoaderMessage('Great, it looks like there is ollama in your computer, one more sec we are checking for a model')
                    let a = Date.now().toString();
                    fetch('/api/checkm/')
                        .then(res => res.json())
                        .then(res => {
                            if (res.message === true) {
                                setLoaderMessage('Great, you have everything. Redirecting....')
                                setTimeout(() => {
                                    setLoader(false)
                                }, 2000);
                            } else {
                                router.push('/model')
                            }
                        })
                } else {
                    router.push('/download')
                }
            })
    }, [])

    return (
        <div className="flex flex-row">
            {
                loader && <div className="w-full h-screen fixed top-0 left-0 z-[9999] bg-primary flex items-center justify-center flex-col">
                    <div className="text-center my-3 text-text text-2xl">
                        {loaderMessage}
                    </div>
                    <div>
                        {loader && <div>
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-300 fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>}
                    </div>
                </div>
            }
            <div className={isOpen ? "left-0 lg:relative fixed z-50 h-screen top-0 shh transition-all duration-500" : "shh left-[-100%] top-0 lg:left-0 lg:relative h-screen fixed z-50 transition-all duration-500"}>
                <Bar update={update} setUpdate={setUpdate} messages={messages} setMessages={setMessages} setModel={setModel} isOpen={isOpen} setOpen={setOpen} />
            </div>
            <div className="w-full">
                <div className="w-full lg:hidden flex justify-between items-center bg-primary text-text py-2 px-4 rounded-lg">
                    <button onClick={() => setOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <Image src={'/ailogo.png'} alt="logo" width={70} height={70} />
                </div>
                <Chat messages={messages} setMessages={setMessages} setModel={setModel} model={model} update={update} />
            </div>
        </div>
    );
}
