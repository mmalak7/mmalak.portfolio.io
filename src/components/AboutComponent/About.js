import React from 'react'
import { useInView } from 'react-intersection-observer';
import '../AboutComponent/About.scss'


export default function About() {

    const [ref, inView] = useInView({
        root: null,
        threshold: 0.3,
        triggerOnce: true,
    })

    const [ref2, inView2] = useInView({
        root: null,
        threshold: 0.3,
        triggerOnce: true,
    })

    return (

        <div className='about'>
            <div className='bio-text-container'>
                <div className='bio-element-wrapper'>
                    <div ref={ref} className='bio-element'>
                        <h1>
                            {inView ? (
                                <span className="a-1-h1">About me</span>
                            ) : (
                                    <span className="a1">About me</span>
                                )}
                        </h1>
                        <h2>
                            {inView ? (
                                <span className="a-2-h1">Have a look!</span>
                            ) : (
                                    <span className="a2">work</span>
                                )}
                        </h2>
                    </div>
                    <p ref={ref2} className='bio-element-description'>
                        <div className='a-2-d'>
                            {inView2 ? (
                                <span className="a-2-span">
                                    Freshly graduated student from <a href="" title="Wroclaw University of Science and Technology" target="_blank">Wroclaw University of Science and Technology</a>, partly made in <a href="https://hetic.net" title="Universitat Autonoma de Barcelona" target="_blank">Universitat Autonoma de Barcelona</a>.
                        Last years I had the chance to did an internship at <a href="" title="Explain Everything" target="_blank">Explain Everything </a>
                        (2018/2019), as Android developer, after that I was working for my university as data scientist (2018). During my master thesis I was cooparating with Ateknea company (2019) to create my master thesis "Forecasting level of air pollution in urban areas".
                                    <br /> <br />Currently (2020) working for Airbus in Hamburg. Enjoying a great love of aesthetic graphics and projects. Still improving the knowledge of web development! <br /> <br />
                        Open for any <a href="" title="mmalak portfolio" target="_blank"> collaporation! </a>
                                </span>
                            )
                                : (
                                    <span span className="a-2">
                                        Freshly graduated student from <a href="" title="Wroclaw University of Science and Technology" target="_blank">Wroclaw University of Science and Technology</a>, partly made in <a href="https://hetic.net" title="Universitat Autonoma de Barcelona" target="_blank">Universitat Autonoma de Barcelona</a>.
                        Last years I had the chance to did an internship at <a href="" title="Explain Everything" target="_blank">Explain Everything </a>
                        (2018/2019), as Android developer, after that I was working for my university as data scientist (2018). During my master thesis I was cooparating with Ateknea company (2019) to create my master thesis "Forecasting level of air pollution in urban areas".
                                        <br /> <br />Currently (2020) working for Airbus in Hamburg. Enjoying a great love of aesthetic graphics and projects. Still improving the knowledge of web development! <br /> <br />
                        Open for any <a href="" title="mmalak portfolio" target="_blank"> collaporation! </a>
                                    </span>
                                )}
                        </div>


                    </p>
                </div>
            </div>
        </div>
    )
}
