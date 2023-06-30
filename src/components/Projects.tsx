import Banner from './Banner';

const portfolioBanner = {
    textTitle: "Portfolio",
    textContent: "This portfolio was built with React and transpiled to JavaScript with webpack. I used the ASP.NET Core web framework in C# to build the backend.",
};

const gomokuBanner = {
    textTitle: "Gomoku",
    textContent: "Web implementation of the board game gomoku. Built with pure HTML, CSS, Javascript and PHP. Utilizes a MySQL database for the backend.",
    textLink: "https://github.com/mennymendoza/gomoku",
    linkDescription: "View repo"
};

const rubiksBanner = {
    textTitle: "Rubik's Cube Solver",
    textContent: "Implementation of three machine learning algorithms to solve a Rubik's Cube. Built my own Rubik's Cube library to be used for other purposes. Can be used alone or with the draw-cube library in pygame.",
};

export default function Projects() {
    
    return (
        <div className="main-container">
            <Banner textBoxProps={portfolioBanner} imageSrc="assets/images/figma.png" invert={false} />
            <Banner textBoxProps={gomokuBanner} imageSrc="assets/images/gomoku.png" invert={true} />
            <Banner textBoxProps={rubiksBanner} imageSrc="assets/images/rubiks-cube.jpg" invert={false} />
        </div>
    );

}