import React, { useEffect, useRef } from 'react';
import Pavilon from '../../assets/mmalak2.png';
import gsap from 'gsap';

const AboutHighResolution = () => {

    let pavilonPhotoAbout = useRef(null);
    let bioDescription = useRef(null);
    let bio = useRef(null);

    let one = useRef(null);
    let two = useRef(null);
    let three = useRef(null);
    let four = useRef(null);
    let five = useRef(null);
    let six = useRef(null);

    useEffect(() => {
        gsap.from(pavilonPhotoAbout, {
            duration: 2,
            opacity: 0,
            y: 30,
            ease: "power3.out",
        })

        gsap.to(bioDescription, {
            visibility: "visible"
        });

        gsap.to([one, two, three, four, five, six], {
            delay: 1.4,
            duration: 1.8,
            opacity: 1,
            ease: "power3.out",
            stagger: {
                amount: .5,
            }
        })
    }, [pavilonPhotoAbout])


    return (
        <div className="about-page">
            <div className="container">
                <p ref={el => bioDescription = el} className='bio-element-description'>
                    <p ref={el => one = el} className="a-2-span">Freshly graduated student from <a href="http://pwr.edu.pl/en/" title="Wrocław University of Science and Technology" target="_blank">Wroclaw University of Science and Technology</a>,</p>
                    <p ref={el => two = el} className="a-2-span">partly made in <a href="https://www.uab.cat/en/" title="Universitat Autonoma de Barcelona" target="_blank">Universitat Autonoma de Barcelona</a>.</p>
                    <p ref={el => three = el} className="a-2-span">Last years I had the chance to did an internship at <a href="https://explaineverything.com/" title="Explain Everything" target="_blank">Explain Everything </a>                   </p>
                    <p ref={el => four = el} className="a-2-span">(2018/2019), as Android developer, after that I was working for my university as data scientist (2018). During my master thesis I was cooparating with Ateknea company (2019) to create my master thesis "Forecasting level of air pollution in urban areas".</p>
                    <p ref={el => five = el} className="a-2-span"><br /> <br />Currently (2020) working for Airbus in Hamburg. Enjoying a great love of aesthetic graphics and projects. Still improving the knowledge of web development! <br /> <br /></p>
                    <p ref={el => six = el} className="a-2-span">Open for any <a href="mailto:marcinmalak7@gmail.com" title="mmalak portfolio" target="_blank"> collaboration! </a></p>
                </p>
                <div className='owner-photo'>
                    <img ref={el => pavilonPhotoAbout = el} src={Pavilon} alt="" />
                </div>
            </div>
        </div >
    );
};

export default AboutHighResolution;