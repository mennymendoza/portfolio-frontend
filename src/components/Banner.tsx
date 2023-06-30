import TextBox from './TextBox';
import { TextBoxProps } from './TextBox';

export interface BannerProps {
    invert: boolean,
    imageSrc: string,
    textBoxProps: TextBoxProps
}

export default function Banner(props: BannerProps) {
    const { invert, imageSrc, textBoxProps } = props
    
    return (
        <section className={invert ? "banner reverse" : "banner"}>
            <div className="inner-section">
                <TextBox
                    textTitle={textBoxProps.textTitle}
                    textContent={textBoxProps.textContent}
                    textLink={textBoxProps.textLink}
                    linkDescription={textBoxProps.linkDescription}
                />
                <img src={imageSrc} alt="No image found."/>
            </div>
        </section>
    );
}