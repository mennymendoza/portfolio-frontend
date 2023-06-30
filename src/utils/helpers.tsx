
export const sleep = (timeout: number): Promise<void> => new Promise(resolve => setTimeout(resolve, timeout))

export async function writeText(text: string, setText: (text: string) => void, timeout: number) {
    let currentText = "";
    for (let i = 0; i < text.length - 1; i++) {
        currentText += text[i];
        setText(currentText + "|");
        await sleep(timeout);
    }
    setText(text);
}