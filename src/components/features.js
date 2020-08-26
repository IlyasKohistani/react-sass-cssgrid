import React from "react";
import FEATURES from "../data/Features";

const Features = () => {
  const featureList = FEATURES.map((features) => {
    return (
      <div
        className="feature"
        key={features.id}
        data-aos={features.anim}
        data-aos-delay={features.delay}
        data-aos-easing="ease-out-cubic"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <svg className="feature__icon">
          <use xlinkHref={features.href + features.sprite} />
        </svg>
        <h4 className="heading-4 heading-4__dark">{features.title}</h4>
        <p className="feature__text">{features.description}</p>
      </div>
    );
  });
  return <section className="features">{featureList}</section>;
};

export default Features;
