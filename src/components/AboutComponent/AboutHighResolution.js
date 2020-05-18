import React from 'react';
import Pavilon from '../../assets/pavillon-entrance.jpg'

const AboutHighResolution = () => {
    return (
        <div className="about-page">
            <div className="container">
                <p className='bio-element-description'>
                    <span className="a-2-span">
                        Freshly graduated student from <a href="http://pwr.edu.pl/en/" title="Wroclaw University of Science and Technology" target="_blank">Wroclaw University of Science and Technology</a>, partly made in <a href="https://www.uab.cat/en/" title="Universitat Autonoma de Barcelona" target="_blank">Universitat Autonoma de Barcelona</a>.
                        Last years I had the chance to did an internship at <a href="https://explaineverything.com/" title="Explain Everything" target="_blank">Explain Everything </a>
                        (2018/2019), as Android developer, after that I was working for my university as data scientist (2018). During my master thesis I was cooparating with Ateknea company (2019) to create my master thesis "Forecasting level of air pollution in urban areas".
                                    <br /> <br />Currently (2020) working for Airbus in Hamburg. Enjoying a great love of aesthetic graphics and projects. Still improving the knowledge of web development! <br /> <br />
                        Open for any <a href="" title="mmalak portfolio" target="_blank"> collaporation! </a>
                    </span>
                </p>
                <div className='owner-photo'>
                    <img src={Pavilon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutHighResolution;