import * as React from 'react';
import Card from './Card';
import { CardProps } from './Card';

export interface CardSetProps {
    id?: string,
    cards: CardProps[],
}

export default function CardSet (props: CardSetProps) {
    const { id, cards } = props;

    return (
        <section id={id} className="card-set">
            <div className="inner-section">
                {cards.map((obj: CardProps) => <Card key={obj.cardTitle} {...obj} />)}
            </div>
        </section>
    );
}