import React from 'react'
import '../WorksComponent/Work.scss'
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';

export default function Work() {
    return (
        <div className='works'>
            <div className='main-label-name'>
                    <h1>Selected</h1>
                    <h1>work</h1>
            </div>
            <div className='project-container'> 
            <img id='name-of-project' src={project1}></img>
                <a className='label'>
                    <span className='label-data'>
                        January 2019 <br />
                    </span>
                    <span className='label-heading'>
                        <span>project name</span>
                    </span>
                </a>
            </div>
            <div className='project-container'> 
            <img id='name-of-project' src={project2}></img>
                <a className='label'>
                    <span className='label-data'>
                        January 2019 <br />
                    </span>
                    <span className='label-heading'>
                        <span>project name</span>
                    </span>
                </a>
            </div>
            <div className='project-container'> 
            <img id='name-of-project' src={project3}></img>
                <a className='label'>
                    <span className='label-data'>
                        January 2019 <br />
                    </span>
                    <span className='label-heading'>
                        <span>project name</span>
                    </span>
                </a>
            </div>
            <div className='project-container'> 
            <img id='name-of-project' src={project4}></img>
                <a className='label'>
                    <span className='label-data'>
                        January 2019 <br />
                    </span>
                    <span className='label-heading'>
                        <span>project name</span>
                    </span>
                </a>
            </div>
        </div>
    )
}
