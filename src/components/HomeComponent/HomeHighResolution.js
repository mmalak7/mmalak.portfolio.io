import React, { useEffect, useRef } from 'react';
import Pavilon from '../../assets/pavillon-entrance.jpg'

import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap from 'gsap';

const HomeHighResolution = () => {

    let pavilonPhoto = useRef(null);
    let quote = useRef(null);

    let line1After = CSSRulePlugin.getRule(".h1-1:after");
    let line3After = CSSRulePlugin.getRule(".h4-1:after");

    useEffect(() => {

        gsap.to("body", 0, { css: { visibility: "visible" } });

        gsap.from(pavilonPhoto, {
            duration: 1.4,
            opacity: 0,
            y: 100,
            ease: "power3.out",
        })

        gsap.to(quote, {
            visibility: "visible"
        });

        gsap.to([line1After, line3After], {
            delay: 1.4,
            duration: 1.8,
            width: "0%",
            ease: "power3.out",
            stagger: {
                amount: 1
            }
        })
    }, [pavilonPhoto])

    return (
        <div className="home-page">
            <div className="container">
                <div className='pavilon-photo'>
                    <img ref={el => (pavilonPhoto = el)} src={Pavilon} alt="" />
                </div>
                <div ref={el => quote = el} className="quote-home">
                    <div className='mies'>
                        <h1 className='h1-1' >Less is<br /> more</h1>
                    </div>
                    <h4 className='h4-1'>~Ludwig Mies van der Rohe</h4>
                </div>
            </div>
        </div>
    );
};

export default HomeHighResolution;