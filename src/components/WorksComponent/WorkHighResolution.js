import React, { useRef } from "react";
import workphoto from "../../assets/workPhoto.png";
import mioStudio from "../../assets/mio-studio.png";
import gsap from "gsap";

const WorkHighResolution = () => {
  let imgWork = useRef(null);
  let imgWork2 = useRef(null);

  const handleProject = (img) => {
    gsap.from(img, 0.8, {
      y: 20,
      ease: "power3.easeInOut",
    });
    gsap.to(img, 0.8, {
      opacity: 1,
    });
  };

  const handleProjectReturn = (img) => {
    gsap.to(img, {
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="work-page">
      <div className="container">
        <div className="project1">
          <img ref={(el) => (imgWork = el)} src={workphoto} alt="" />
          <a
            onMouseEnter={() => handleProject(imgWork)}
            onMouseOut={() => handleProjectReturn(imgWork)}
            href="https://mystifying-hugle-9ff6c9.netlify.app/"
          >
            Mega Model Studio
          </a>
        </div>
        <div className="project2">
          <img ref={(el2) => (imgWork2 = el2)} src={mioStudio} alt="" />
          <a
            onMouseEnter={() => handleProject(imgWork2)}
            onMouseOut={() => handleProjectReturn(imgWork2)}
            href="https://practical-curran-260ec1.netlify.app/"
          >
            MioStudio
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkHighResolution;
