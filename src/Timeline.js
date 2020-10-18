import React from "react";
import timelineData from "./timelineData";

import TimelineItem from "./TimelineItem";

const timeline = () => {
  return (
    <div className="timeline-container">
      {timelineData.map((data, index) => (
        <TimelineItem data={data} key={index} />
      ))}
    </div>
  );
};
export default timeline;
