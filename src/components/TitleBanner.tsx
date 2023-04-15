import * as React from 'react';
import TextBox from './TextBox';
import { TextBoxProps } from './TextBox';

export interface TitleBannerProps {
    id: string,
    invert: boolean,
    textBoxProps: TextBoxProps
}

export default function TitleBanner(props: TitleBannerProps) {
    const { id, invert, textBoxProps } = props;

    return (
        <section id={id} className={invert ? "title-banner reverse" : "title-banner"}>
            <div className="inner-section">
                <TextBox
                    textTitle={textBoxProps.textTitle}
                />
                <div className="stripe-container">
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                </div>
            </div>
        </section>
    );
}
