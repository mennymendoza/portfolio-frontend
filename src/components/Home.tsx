import { useState, useEffect } from 'react';
import Banner from './Banner';
import CardSet from './CardSet';
import { TextBoxProps } from './TextBox';
import { CardProps } from './Card';
import { writeText } from '../utils/helpers';

const homepageCards: CardProps[] = [
    {
        imageSrc: "assets/images/monitor.jpg",
        cardTitle: "Work Experience",
        description: "I have experience in web design, software engineering and academic research.",
        cardLink: "/experience"
    },
    {
        imageSrc: "assets/images/keyboard.jpg",
        cardTitle: "Research",
        description: "I've done research projects in the fields of cybersecurity and machine learning.",
        cardLink: "/research"
    },
    {
        imageSrc: "assets/images/setup.jpg",
        cardTitle: "Projects",
        description: "I've built websites, web applications and neural networks for fun.",
        cardLink: "/projects"
    }
];

export default function Home() {

    const [textTitle, setTextTitle] = useState("");

    const textBoxContent: TextBoxProps = {
        textTitle: textTitle
    };

    const bannerText = "This portfolio is hosted with Kestral using an nginx proxy.";

    useEffect(() => {
        writeText(bannerText, setTextTitle, 70)
    }, []);

    return (
        <div>
            <Banner
                invert={false}
                imageSrc="assets/images/server.jpg"
                textBoxProps={textBoxContent}
            />
            <CardSet
                cards={homepageCards}
            />
        </div>
    );
}