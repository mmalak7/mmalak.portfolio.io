import React from 'react'
import MagicMouse from '../../assets/magic-mouse.svg'

export default function Home() {
    return (
        <div className='home'>
            <h1>
                <span className='a-0-h1 top'>
                    Less is
                </span>
            </h1>
            <h1>
                <span className='a-0-h1'>
                    more
                </span>
            </h1>
            <h4>
                <span className='a-0-h3'>
                    ~Ludwig Mies van der Rohe
                </span>
            </h4>
            <h4>
                <img id='chess' src={MagicMouse} />
            </h4>
        </div>
    )
}
