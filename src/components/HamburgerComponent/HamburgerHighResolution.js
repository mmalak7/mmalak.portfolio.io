import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';


const HamburgerHighResolution = ({ state }) => {

    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealBackColor = useRef(null);
    let link1 = useRef(null);
    let link2 = useRef(null);
    let link3 = useRef(null);
    let link4 = useRef(null);



    useEffect(() => {

        if (state.clicked === false) {
            //close menu
            gsap.to([revealMenu, revealBackColor], {
                duration: .8,
                height: 0,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.07,
                }
            });
            gsap.to(menu, {
                duration: 1,
                css: { display: 'none' },
            })

        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)) {
            // open menu
            gsap.to(menu, {
                duration: 0,
                css: { display: 'block' },
            });

            gsap.to([revealBackColor, revealMenu], {
                duration: 0,
                opacity: 1,
                height: '100%'
            });
            staggerReaveal(revealBackColor, revealMenu);

        }
    }, [state])

    const staggerReaveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: .8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        });
    }

    //styling of text needs to be set as absolute in order to manipulate transform
    const staggerText = (node1, node2, node3, node4) => {
        gsap.from([node1, node2, node3, node4], {
            duration: .8,
            y: 100,
            delay: 0.2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.5
            }
        });
    }

    return (
        <div ref={el => (menu = el)} className="hamburger-menu">
            <div ref={el => (revealBackColor = el)} className="back-color"></div>
            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div className="menu-links">
                    <nav>
                        <ul>
                            <li>
                                <Link ref={el => (link1 = el)} to='/'>home</Link>
                            </li>
                            <li>
                                <Link ref={el => (link2 = el)} to='/works'>works</Link>
                            </li>
                            <li>
                                <Link ref={el => (link3 = el)} to='/about'>about</Link>
                            </li>
                            <li>
                                <Link ref={el => (link4 = el)} to='/contact'>contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HamburgerHighResolution;