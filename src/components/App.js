import React, { Component } from 'react';
import NavMenu from '../components/NavComponent/NavMenu';
import Home from '../components/HomeComponent/Home';
import Work from '../components/WorksComponent/Work';
import About from '../components/AboutComponent/About';

/*
TODO: divide dev-landing-page for 3 parts 
*/

export default class App extends Component {
    render() {
        return (
            <div className='dev-landing-page'>
                <NavMenu />
                <Home />
                <Work />
                <About />
            </div>
        )
    }
}
