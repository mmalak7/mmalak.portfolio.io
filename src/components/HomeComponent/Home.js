import React from 'react'
import '../HomeComponent/Home.scss'
import MagicMouse from '../../assets/magic-mouse.svg'

export default function Home() {
    return (
        <div className='home'>
            <h1>Less is</h1>
            <h1>more</h1>
            <h4>~Ludwig Mies van der Rohe</h4>
            <div className='logo-mouse'>
                <img id='chess' src={MagicMouse}/>
            </div>
        </div>
    )
}
