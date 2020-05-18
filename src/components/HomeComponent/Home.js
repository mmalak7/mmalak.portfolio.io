import React from 'react'
import MagicMouse from '../../assets/magic-mouse.svg'

export default function Home() {
    return (
        <div className='home'>
            <div className="quote">
                <h1>Less is</h1>
                <h1>more</h1>
                <h4>~Ludwig Mies van der Rohe</h4>
            </div>
            <img id='chess' src={MagicMouse} />
        </div>
    )
}
