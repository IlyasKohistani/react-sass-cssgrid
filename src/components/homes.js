import React from "react";
import HOMES from "../data/homes";

const Homes = () => {
  const homeList = HOMES.map((home) => {
    return (
      <div
        className="home"
        key={home.id}
        data-aos="fade-left"
        data-aos-delay={home.delay}
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <img src={home.image} alt="House 6" className="home__img" />
        <svg className="home__like">
          <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 className="home__name">{home.title}</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>{home.llc}</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>{home.rooms} rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-expand"></use>
          </svg>
          <p>
            {home.space} m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref="img/sprite.svg#icon-key"></use>
          </svg>
          <p>${home.price}</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
    );
  });
  return <section className="homes">{homeList}</section>;
};

export default Homes;
