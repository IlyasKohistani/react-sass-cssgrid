import React from "react";
import story1 from "../img/story-1.jpeg";
import story2 from "../img/story-2.jpeg";

const Story = () => {
  return (
    <div className="story__pictures">
      <img
        src={story1}
        alt="Couple with new house"
        data-aos="zoom-in"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        className="story__img-1"
      />
      <img
        src={story2}
        alt="Couple with new house"
        data-aos="zoom-out-left"
        data-aos-delay="400"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        className="story__img-2"
      />
    </div>
  );
};

export default Story;
