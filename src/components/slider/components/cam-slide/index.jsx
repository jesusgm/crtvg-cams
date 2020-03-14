/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./styles.css";

function CamSlide({ image }) {
  return (
    <div className="cam-slider-container slide">
      <iframe
        className="cam-slide"
        src={image.src}
        frameBorder="0"
        allowFullScreen={false}
      />
      <h3 className="cam-name">{image.name}</h3>
    </div>
  );
}

export default CamSlide;
