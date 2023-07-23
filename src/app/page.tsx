"use client";
import styles from './page.module.css'
import { useState, useEffect } from 'react';
import Banner from '@/components/Banner';
import CardSet from '@/components/CardSet';
import { TextBoxProps } from '@/components/TextBox';
import { CardProps } from '@/components/Card';
import { writeText } from '@/utils/helpers';

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
      <main className={styles.main}>
        <Banner
            invert={false}
            imageSrc="assets/images/server.jpg"
            textBoxProps={textBoxContent}
        />
        <CardSet
            cards={homepageCards}
        />
      </main>
    );
}
