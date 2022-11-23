import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h2 className="project-heading">Projetos</h2>
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
