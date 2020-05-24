import React, { useRef } from 'react';
import workphoto from '../../assets/workPhoto.png';
import gsap from 'gsap';


const WorkHighResolution = () => {

    let imgWork = useRef(null);

    const handleProject = () => {

        gsap.from(imgWork, 0.8, {
            y: 20,
            ease: 'power3.easeInOut',
        });
        gsap.to(imgWork, 0.8, {
            opacity: 1,
        });
    }

    const handleProjectReturn = () => {
        gsap.to(imgWork, {
            opacity: 0,
            ease: 'power3.inOut',
        });
    }

    return (
        <div className="work-page">
            <div className="container">
                <div className="project1">
                    <img ref={el => imgWork = el} src={workphoto} alt='' />
                    <a onMouseEnter={handleProject} onMouseOut={handleProjectReturn} href='https://mystifying-hugle-9ff6c9.netlify.app/'>Mega Model Studio</a>
                </div>
                {/* <div className="project2">
                    <img ref={el => imgWork2 = el} src={Pavilon} alt='' />
                    <a onMouseEnter={handleProject} onMouseOut={handleProjectReturn} href=''>Hamborgo catalog</a>
                </div> */}
            </div>
        </div>
    );
};

export default WorkHighResolution;