import React from 'react'
import { useInView } from 'react-intersection-observer';
import '../WorksComponent/Work.scss'
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';

// @TODO: Check inline styling options and set the properly for transform3D

export default function Work() {

    const [ref, inView] = useInView({
        threshold: 1,
        // triggerOnce: true,
    })

    return (
        <div className='works'>
            <div ref={ref} className='main-label-name'>
                <h1>
                    {inView ? (
                        <span className="a-1-h1">Selected</span>
                    ) : (
                            <span className="a1">Selected</span>
                        )}
                </h1>
                <h1>
                    {inView ? (
                        <span className="a-2-h1">work</span>
                    ) : (
                            <span className="a2">work</span>
                        )}
                </h1>
            </div>

            <div ref={ref} className='project-container'>
                <div className='img-wrap'>
                    <img id='project-img' src={project1}></img>
                    {inView ? (
                        <span className='w-1-img-cover'></span>
                    ) : (
                            <span className='img-cover'></span>
                        )}
                </div>
                <a ref={ref} className='label'>
                    {inView ? (
                        <span>
                            <span className='label-data-l1'>
                                January 2019 <br />
                            </span>
                        </span>
                    ) : (
                            <span>
                                <span className='label-data'>
                                    January 2019 <br />
                                </span>
                            </span>

                        )}
                    {inView ? (
                        <span>
                            <span className='label-heading-l1'>
                                project name
                            </span>
                        </span>
                    ) : (
                        <span>
                            <span className='label-heading'>
                                <span>project name</span>
                            </span>
                        </span>
                        )}
                </a>
            </div>
        </div>
    )
}
