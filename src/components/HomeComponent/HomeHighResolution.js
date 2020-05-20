import React, { useEffect, useRef } from 'react';
import Pavilon from '../../assets/pavillon-entrance.jpg'
import '../../stylesheets/layout/laptop/HomeHighRes.scss';

import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap from 'gsap';

const HomeHighResolution = () => {

    let pavilonPhoto = useRef(null);
    let quote = useRef(null);

    let line1 = useRef(null);
    let line1After = CSSRulePlugin.getRule(".h1-1:after");
    // let line2 = useRef(null);
    // let line2After = CSSRulePlugin.getRule("h1-2:after");
    let line3 = useRef(null);
    let line3After = CSSRulePlugin.getRule(".h4-1:after");

    useEffect(() => {

        gsap.to(quote, {
            visibility: "visible"
        });

        gsap.to([line1After], {
            duration: .8,
            width: "0%",
            ease: "power3.out",
        });

        gsap.to(line3After, {
            duration: 0.8,
            width: "0%",
            ease: "power3.out",
        });
    }, [])

    return (
        <div className="home-page">
            <div className="container">
                <div className='pavilon-photo'>
                    <img ref={el => (pavilonPhoto = el)} src={Pavilon} alt="" />
                </div>
                <div ref={el => quote = el} className="quote-home">
                    <div className='mies'>
                        <h1 className='h1-1' >Less is<br/> more</h1>
                        {/* <h1 className='h1-1'>more</h1> */}
                    </div>
                    <h4 ref={el => (line3 = el)} className='h4-1'>~Ludwig Mies van der Rohe</h4>
                </div>
            </div>
        </div>
    );
};

export default HomeHighResolution;