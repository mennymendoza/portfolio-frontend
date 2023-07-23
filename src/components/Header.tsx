"use client";
import Navigation from './Navigation';

export default function Header() {

    return (
        <header>
            <div id="header-div" className="inner-section">
                <a href="/"><h1 className="icon">juan mendoza</h1></a>
                <Navigation />
            </div>
        </header>
    );
}