import { NextResponse } from "next/server";
import { exec } from 'child_process';

function checkOllama() {
    return new Promise((resolve, reject) => {
        exec('where ollama', (error, stdout, stderr) => {
            if (stdout) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}


export async function GET() {
    let ollama = await checkOllama();
    return (
        NextResponse.json({ message: ollama })
    )
}