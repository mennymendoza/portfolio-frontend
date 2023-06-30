import Navigation from './Navigation';

export default function Footer() {
    return (
        <footer>
            <div className="inner-section">
                <div className="column-1">
                    <h2>More Info</h2>
                    <ul className="nav">
                        <a href="https://github.com/mennymendoza" className="nav-link"><li>GitHub</li></a>
                        <a href="https://www.linkedin.com/in/juan-mendoza-dev/" className="nav-link"><li>LinkedIn</li></a>
                    </ul>
                    <div className="separator"></div>
                    <p className="footer-info">Email: Juanmendoza97@mail.fresnostate.edu</p>
                </div>
                <Navigation />
            </div>
        </footer>
    );
}