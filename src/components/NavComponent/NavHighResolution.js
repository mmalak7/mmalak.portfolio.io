import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import HamburgerHighResolution from '../HamburgerComponent/HamburgerHighResolution';

const NavHighResolution = ({ history }) => {

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: 'open',
    });

    const handleMenu = () => {
        disabledMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: 'close'
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: 'open',
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: 'close',
            });
        }
    }

    //disabled button state
    const [disabled, setDisabled] = useState(false)

    const disabledMenu = () => {
        setDisabled(!disabled);
        console.log(1);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };

    useEffect(() => {
        //listen to page changes
        history.listen(() => {
            setState({ clicked: false, menuName: 'open' })
        })
    })

    return (
        <header>
            <div className='header-page'>
                <button className='menu-button' disabled={disabled} onClick={handleMenu}>Menu</button>
                <div className='topic-page'>
                    <h1>Designed</h1>
                    <h3>2020</h3>
                </div>
            </div>
            <HamburgerHighResolution state={state} />
        </header>
    );
};

export default withRouter(NavHighResolution);