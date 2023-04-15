import * as React from 'react';



export async function writeText(text: string, setText: (text: string) => void, timeout: number) {
    let currentText = "";
    let sleep = () => new Promise(resolve => setTimeout(resolve, timeout))
    for (let i = 0; i < text.length - 1; i++) {
        currentText += text[i];
        setText(currentText + "|");
        await sleep();
    }
    setText(text);
}