import React from 'react'
import chess from '../../assets/chess_tower.png';
import '../NavComponent/NavMenu.scss'

export default function NavMenu() {
    return (
        <div className='header'>
            <div className='logo-mobile'>
                <img id='chess' src={chess}/>
            </div>
            <div className='topic'>
                <h1>Designed</h1>
                <h3>2020</h3>
            </div>
        </div>
    )
}
