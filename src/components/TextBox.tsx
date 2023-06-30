
export interface TextBoxProps {
    textTitle: string,
    textContent?: string,
    textLink?: string,
    linkDescription?: string,
}

export default function TextBox(props: TextBoxProps) {

    const {textTitle, textContent, textLink, linkDescription} = props;
    
    return (
        <div className="text-box">
            <h1>{textTitle}</h1>
            <p>{textContent ?? ""}</p>
            {
                textLink ? 
                <a href={props.textLink}>{linkDescription ?? "Learn More"}</a> :
                <p></p>
            }
        </div>
    );
}
