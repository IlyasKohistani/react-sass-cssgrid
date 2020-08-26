import React from "react";
import { GALLERY } from "../data/Gallery";

const Gallery = () => {
  const galleryList = GALLERY.map((gallery) => {
    return (
      <figure
        className={"gallery__item gallery__item--" + gallery.id}
        key={gallery.id}
        data-aos="zoom-in"
        data-aos-delay={gallery.delay}
        data-aos-easing="ease-out-cubic"
        data-aos-once="false"
      >
        <img
          src={gallery.image}
          alt={"Gallery image " + gallery.id}
          className="gallery__img"
        />
      </figure>
    );
  });

  return <section className="gallery">{galleryList}</section>;
};

export default Gallery;
