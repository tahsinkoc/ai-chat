import { NextResponse } from "next/server";

function checkModel() {
    return new Promise(async (resolve, reject) => {
        let a = Date.now().toString()
        fetch('http://localhost:11434/api/generate', { method: 'POST', body: JSON.stringify({ model: 'gemma:2b', prompt: a, stream: false }), next: { revalidate: 3 } })
            .then(res => res.json())
            .then(res => {
                resolve(true);
            })
            .catch(err => {
                resolve(false);
            })

    })
}


export async function GET(req: string) {
    let isThere = await checkModel();
    return (
        NextResponse.json({ message: isThere })
    )
}