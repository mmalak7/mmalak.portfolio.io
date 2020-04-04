import React from 'react'
import '../AboutComponent/About.scss'

export default function About() {
    return (
        <div className='about'>
            <div className='bio-text-container'>
                <div className='bio-element-wrapper'>
                    <h1 className='bio-element'>
                        About me
                    </h1>
                    <h2 className='bio-element'>
                        Have a look!
                    </h2>
                    <p className='bio-element-description'>
                    Freshly graduated student from <a href="" title="Wroclaw University of Science and Technology" target="_blank">Wroclaw University of Science and Technology</a>, partly made in <a href="https://hetic.net" title="Universitat Autonoma de Barcelona" target="_blank">Universitat Autonoma de Barcelona</a>. 
                    Last years I had the chance to did an internship at <a href="" title="Explain Everything" target="_blank">Explain Everything </a> 
                    (2018/2019), as Android developer, after that I was working for my university as data scientist (2018). During my master thesis I was cooparating with Ateknea company (2019) to create my master thesis "Forecasting level of air pollution in urban areas".
                    <br /> <br />Currently (2020) working for Airbus in Hamburg. Enjoying a great love of aesthetic graphics and projects. Still improving the knowledge of web development! <br /> <br /> 
                    Open for any <a href="" title="mmalak portfolio" target="_blank"> collaporation! </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
