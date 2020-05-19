import React, { Component } from 'react';
import NavMenu from '../components/NavComponent/NavMenu';
import Home from '../components/HomeComponent/Home';
import Work from '../components/WorksComponent/Work';
import About from '../components/AboutComponent/About';
import Contact from '../components/ContactComponent/Contact';

import NavHighResolution from '../components/NavComponent/NavHighResolution';
import HomeHighResolution from '../components/HomeComponent/HomeHighResolution';
import WorkHighResolution from '../components/WorksComponent/WorkHighResolution';
import AboutHighResolution from '../components/AboutComponent/AboutHighResolution';
import ContactHighResolution from '../components/ContactComponent/ContactHighResolution';

import { Route } from 'react-router-dom';

/*
TODO: refactor scss variables and classes ;) - DONE!
*/

const routes = [
    { path: "/", name: 'Home', Component: HomeHighResolution },
    { path: "/about", name: 'About', Component: AboutHighResolution },
    { path: "/works", name: 'works', Component: WorkHighResolution },
    { path: "/contact", name: 'Contact', Component: ContactHighResolution },
]

export default class App extends Component {

    render() {

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        console.log(screenWidth)
        console.log(screenHeight)

        if (screenWidth < 1024) {
            return (
                <div className='dev-landing-page'>
                    <NavMenu />
                    <Home />
                    <Work />
                    <About />
                    <Contact />
                </div>
            )
        } else {
            return (
                <>
                    <NavHighResolution />
                    <div className="back-container"></div>
                    <div className='dev-landing-page'>
                        {routes.map(({ name, path, Component }) => (
                            <Route key={name} path={path} exact>
                                <div className="page">
                                    <Component />
                                </div>
                            </Route>
                        ))}
                    </div>
                </>
            )
        }
    }
}
