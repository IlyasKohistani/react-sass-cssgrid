import React from "react";
import realtor1 from "../img/realtor-1.jpeg";
import realtor2 from "../img/realtor-2.jpeg";
import realtor3 from "../img/realtor-3.jpeg";

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>
      <div className="realtors__list">
        <img src={realtor1} alt="Realtor 1" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4__light">Erik Feinman</h4>
          <p className="realtors__sold">245 houses sold</p>
        </div>

        <img src={realtor2} alt="Realtor 2" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4__light">Kim Brown</h4>
          <p className="realtors__sold">212 houses sold</p>
        </div>

        <img src={realtor3} alt="Realtor 3" className="realtors__img" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4__light">Toby Ramsey</h4>
          <p className="realtors__sold">198 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
