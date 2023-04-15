import * as React from 'react';
import Counter from './Counter';
import Home from './Home';
import { createBrowserRouter, RouterProvider, Link, BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Research from './Research';
import Projects from './Projects';
import Header from './Header';
import Footer from './Footer';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about-me",
        element: <AboutMe />
    },
    {
        path: "/experience",
        element: <Experience />
    },
    {
        path: "/research",
        element: <Research />
    },
    {
        path: "/projects",
        element: <Projects />
    },
    {
        path: "/counter",
        element: <Counter />
    },
    {
        path: "*",
        element: <Home />
    }
]);

export default function App(): JSX.Element {
    return (
        <div>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}
