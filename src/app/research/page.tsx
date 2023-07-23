import Banner from '../../components/Banner';
import CardSet from '../../components/CardSet';
import { TextBoxProps } from '../../components/TextBox';
import { CardProps } from '../../components/Card';

const textBoxContent: TextBoxProps = {
    textTitle: "Pharmaceutical Stress vs. Strain Simulations"
};

const researchCards: CardProps[] = [
    {
        imageSrc: "assets/images/motivation.png",
        cardTitle: "Motivation",
        description: "The goal of the project was to predict the behavior of pharmaceutical powders under extreme pressure. This is normally done through computationally-intensive simulations."
    },
    {
        imageSrc: "assets/images/approach.png",
        cardTitle: "Approach",
        description: "I created a training dataset of simulation inputs and outputs with the help of German PhD student Kostas Giannis. Then, I built a neural network to predict simulation outputs in Python using the Keras Sequential API.",
    },
    {
        imageSrc: "assets/images/results.png",
        cardTitle: "Results",
        description: "I tried many different neural network architectures before finding one that worked well. Once I was finished, I presented the results to all of my professors at Fresno State.",
        cardLink: "assets/files/research-presentation.pdf",
        linkDescription: "See slides"
    }
]

export default function Research() {

    return (
        <div className="main-container">
            <Banner 
                invert={false}
                textBoxProps={textBoxContent}
                imageSrc="assets/images/data-sample.png"
            />
            <CardSet cards={researchCards} />
        </div>
    );
}