import React, { useEffect, useRef } from 'react';

import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite } from 'gsap'
import { gsap } from "gsap";

const ContactHighResolution = () => {
    let info = useRef(null);
    let infoCSS = CSSRulePlugin.getRule('.info:after');

    let emailForm = useRef(null);
    let emailCSS = CSSRulePlugin.getRule('.email-form:after');

    let socialText = useRef(null);
    let socialIcons = useRef(null);


    gsap.registerPlugin(CSSRulePlugin, gsap, TimelineLite)

    useEffect(() => {
        gsap.to([info, emailForm], .8, {
            visibility: 'visible',
        })

        gsap.to(infoCSS, .8, {
            delay: .8,
            width: "0%",
            ease: 'power3.out',
        })

        gsap.to(emailCSS, .8, {
            delay: 1.2,
            width: "0%",
            ease: 'power3.out',
        })

        gsap.from(socialText, .8, {
            delay: 1.4,
            opacity: 0,
            y: 40,
            ease: 'power3.inOut',
        })

        gsap.from(socialIcons, .8,{
            delay: 1.4,
            opacity: 0,
            y: 40,
            ease: 'power3.inOut',
        })
    });

    return (
        <div className='contact-container'>
            <div className="container-wrapper">
                <div className='main-part'>
                    <p ref={el => (info = el)} className='info'>Let's collaborate</p>
                    <p ref={el => (emailForm = el)} className='email-form'>marcinmalak7@gmail.com</p>
                </div>
                <div className='social-form'>
                    <p ref={el => (socialText = el)} className='social-text'>Find me</p>
                    <div ref={el => (socialIcons = el)} className='contact-social-buttons'>
                        <a href="https://www.linkedin.com/mwlite/in/marcin-malak-871b90138"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.72 49.76"><path d="M12.46,6.1c0,3.19-2.4,5.76-6.27,5.76H6.12C2.39,11.86,0,9.29,0,6.1S2.46.33,6.27.33,12.39,2.83,12.46,6.1ZM.63,49.78h11.1V16.42H.63ZM39,15.64a11,11,0,0,0-10,5.5V16.42H17.87c.15,3.13,0,33.36,0,33.36H29V31.15a7.4,7.4,0,0,1,.36-2.7A6.07,6.07,0,0,1,35,24.39c4,0,5.61,3.06,5.61,7.55V49.78h11.1V30.66C51.73,20.41,46.27,15.64,39,15.64Z"></path></svg></a>
                        <a href="https://www.github.com/mmalak7"><svg enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121" /></svg></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactHighResolution;