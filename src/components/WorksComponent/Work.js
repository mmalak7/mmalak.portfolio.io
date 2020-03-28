import React from 'react'
import '../WorksComponent/Work.scss'
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';

export default function Work() {
    return (
        <div className='works'>
            <span className='main-label-name'>
                    Selected work
                </span>
            <div className='project-container'>
                <a className='label'>
                    <span className='label-heading'>
                        <span>Project 1</span><br />
                        <span>description</span><br />
                        <span>here!</span><br />
                    </span>
                    <span className='label-data'>
                        January 2019
                    </span>
                </a>
                <img id='name-of-project' src={project1}></img>
            </div>
            <div className='project-container'>
                <a className='label'>
                    <span className='label-heading'>
                        <span>Project 2</span><br />
                        <span>description</span><br />
                        <span>here!</span><br />
                    </span>
                    <span className='label-data'>
                        June 2019
                    </span>
                </a>
                <img id='name-of-project' src={project2}></img>
            </div>
            <div className='project-container'>
                <a className='label'>
                    <span className='label-heading'>
                        <span>Project 3</span><br />
                        <span>description</span><br />
                        <span>here!</span><br />
                    </span>
                    <span className='label-data'>
                        November 2019
                    </span>
                </a>
                <img id='name-of-project' src={project3}></img>
            </div>
            <div className='project-container'>
                <a className='label'>
                    <span className='label-heading'>
                        <span>Project 4</span><br />
                        <span>description</span><br />
                        <span>here!</span><br />
                    </span>
                    <span className='label-data'>
                        February 2020
                    </span>
                </a>
                <img id='name-of-project' src={project4}></img>
            </div>
        </div>
    )
}
