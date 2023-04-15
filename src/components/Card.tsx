import * as React from 'react';

export interface CardProps {
    imageSrc: string,
    cardTitle: string,
    description: string,
    cardLink?: string,
    linkDescription?: string,
}

export default function Card (props: CardProps) {
    const { imageSrc, cardTitle, description, cardLink, linkDescription } = props;

    return (
        <div className="card">
            <img src={imageSrc} alt="No image found." />
            <h2 className="card-title">{cardTitle}</h2>
            <p className="card-description">{description}</p>
            {
                cardLink ?
                <a href={cardLink} className="card-link">{linkDescription ?? "Learn More"}</a> :
                <p></p>
            }
        </div>
    );
}