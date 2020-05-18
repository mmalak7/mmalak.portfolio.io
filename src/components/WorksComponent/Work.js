import React from 'react'
import { useInView } from 'react-intersection-observer';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';

// @TODO: Check inline styling options and set the properly for transform3D

export default function Work() {
    
    //TODO: create component for each project that takes parameters for name date and image
    //TODO: then create map function and create for each project in map details specifci created project !

    return (
        <div className='works'>
            <div className='main-label-name'>
                <h1>Selected</h1>
                <h1>work</h1>
            </div>
            <div className='project-container'>
                <div className='img-wrap'>
                    <img id='project-img' src={project1}></img>
                </div>
                <a className='label'>
                    <span className='label-data-l1'>
                        January 2019 <br />
                    </span>
                    <span className='label-heading-l1'>
                        project name
                    </span>
                </a>
                <span className='label-line-l1'>
                </span>
            </div>
        </div>

    )
}
