import Banner from './Banner';
import { TextBoxProps } from './TextBox';

const educationBanner: TextBoxProps = {
    textTitle: "Education",
    textContent: "I graduated from California State University, Fresno with a Bachelor's Degree in Computer Science in May 2022.",
};

const hobbiesBanner: TextBoxProps = {
    textTitle: "Hobbies",
    textContent: "I love to create things. I have several personal projects in the works. Other hobbies include playing guitar, playing piano, playing chess and cooking. My favorite type of book is non-fiction.",
};

export default function AboutMe() {

    return (
        <div className="main-container">
            <Banner
                invert={false}
                textBoxProps={educationBanner}
                imageSrc="assets/images/fresno-state-bulldog.png"
            />
            <Banner
                invert={true}
                textBoxProps={hobbiesBanner}
                imageSrc="assets/images/piano.jpg"
            />
        </div>
    );
}