import React from 'react';
import Pavilon from '../../assets/pavillon-entrance.jpg'

const HomeHighResolution = () => {
    return (
        <div className="home-page">
            <div className="container">
                <img src={Pavilon} alt="" />
                <div className="quote-home">
                    <h1>Less is</h1>
                    <h1>more</h1>
                    <h4>~Ludwig Mies van der Rohe</h4>
                </div>
            </div>
        </div>
    );
};

export default HomeHighResolution;