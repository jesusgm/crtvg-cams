import React from "react";
import Icon from "../../../../icon/";
import "./styles.css";

const LeftArrow = props => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <Icon className="fa fa-arrow-left" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
