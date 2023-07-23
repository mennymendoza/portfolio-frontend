import { ReactNode } from 'react';

export interface CardSetProps {
    id: string,
    children: ReactNode
}

export default function CardSet (props: CardSetProps) {

    const { id, children } = props;

    return (
        <section id={id} className="card-set">
            <div className="inner-section">
                {children}
            </div>
        </section>
    );
}