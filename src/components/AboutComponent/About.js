import React from 'react'
import '../AboutComponent/About.scss'

export default function About() {
    return (
        <div className='about'>
            <div className='bio-text-container'>
                <div className='bio-element-wrapper'>
                    <h2 className='bio-element'>
                        Have a look!
                    </h2>
                    <p className='bio-element'>
                    Freshly graduated student from <a href="" title="Wroclaw University of Science and Technology" target="_blank">Wroclaw University of Science and Technology</a>, partly made in <a href="https://hetic.net" title="Universitat Autonoma de Barcelona" target="_blank">Universitat Autonoma de Barcelona</a>, 
                    I had the chance to do an internship at <a href="" title="Explain Everything" target="_blank">Explain Everything</a>
                    2018/2019, as Android developer, after that I was working for my university as data scientist. During my master thesis I was cooparating with Ateknea company to create my master thesis "Forecasting level of air pollution in urban areas".
                    Currently working for Airbus in Hamburg. Enjoying a great love of aesthetic graphics and projects. Still improving the knowledge of Webdevelopment!
                    </p>
                </div>
            </div>
        </div>
    )
}
