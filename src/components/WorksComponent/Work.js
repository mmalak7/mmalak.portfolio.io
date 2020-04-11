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
        root: null,
        threshold: 0.3,
        triggerOnce: true,
    })

    const [ref2, inView2] = useInView({
        root: null,
        threshold: 0.6,
        triggerOnce: true,
    })

    const [ref3, inView3] = useInView({
        root: null,
        threshold: 0.3,
        triggerOnce: true,
    })

    const [ref4, inView4] = useInView({
        root: null,
        threshold: 0.3,
        triggerOnce: true,
    })

    const [ref5, inView5] = useInView({
        root: null,
        threshold: 0.3,
        triggerOnce: true,
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
            <div ref={ref2} className='project-container'>
                <div className='img-wrap'>
                    <img id='project-img' src={project1}></img>
                    {inView2 ? (
                        <span className='w-1-img-cover'></span>
                    ) : (
                            <span className='img-cover'></span>
                        )}
                </div>
                <a className='label'>
                    {inView2 ? (
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
                    {inView2 ? (
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
                {inView2 ? (
                    <span>
                        <span className='label-line-l1'>
                        </span>
                    </span>
                ) : (
                        <span>
                            <span className='label-line'>
                            </span>
                        </span>
                    )}
            </div>
            <div ref={ref3} className='project-container'>
                <div className='img-wrap'>
                    <img id='project-img' src={project2}></img>
                    {inView3 ? (
                        <span className='w-1-img-cover'></span>
                    ) : (
                            <span className='img-cover'></span>
                        )}
                </div>
                <a className='label'>
                    {inView3 ? (
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
                    {inView3 ? (
                        <span>
                            <span className='label-heading-l1'>
                                project name 2
                            </span>
                        </span>
                    ) : (
                            <span>
                                <span className='label-heading'>
                                    <span>project name 2</span>
                                </span>
                            </span>
                        )}
                </a>
                {inView3 ? (
                    <span>
                        <span className='label-line-l1'>
                        </span>
                    </span>
                ) : (
                        <span>
                            <span className='label-line'>
                            </span>
                        </span>
                    )}
            </div>
            <div ref={ref4} className='project-container'>
                <div className='img-wrap'>
                    <img id='project-img' src={project3}></img>
                    {inView4 ? (
                        <span className='w-1-img-cover'></span>
                    ) : (
                            <span className='img-cover'></span>
                        )}
                </div>
                <a className='label'>
                    {inView4 ? (
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
                    {inView4 ? (
                        <span>
                            <span className='label-heading-l1'>
                                project name 3
                            </span>
                        </span>
                    ) : (
                            <span>
                                <span className='label-heading'>
                                    <span>project name 3</span>
                                </span>
                            </span>
                        )}
                </a>
                {inView4 ? (
                    <span>
                        <span className='label-line-l1'>
                        </span>
                    </span>
                ) : (
                        <span>
                            <span className='label-line'>
                            </span>
                        </span>
                    )}
            </div>
            <div ref={ref5} className='project-container'>
                <div className='img-wrap'>
                    <img id='project-img' src={project4}></img>
                    {inView5 ? (
                        <span className='w-1-img-cover'></span>
                    ) : (
                            <span className='img-cover'></span>
                        )}
                </div>
                <a className='label'>
                    {inView5 ? (
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
                    {inView5 ? (
                        <span>
                            <span className='label-heading-l1'>
                                project name 4
                            </span>
                        </span>
                    ) : (
                            <span>
                                <span className='label-heading'>
                                    <span>project name 4</span>
                                </span>
                            </span>
                        )}
                </a>
                {inView5 ? (
                    <span>
                        <span className='label-line-l1'>
                        </span>
                    </span>
                ) : (
                        <span>
                            <span className='label-line'>
                            </span>
                        </span>
                    )}
            </div>
        </div>

    )
}
