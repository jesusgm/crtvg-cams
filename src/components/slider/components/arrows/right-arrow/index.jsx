import React from "react";
import Icon from "../../../../icon/";
import "./styles.css";

const RightArrow = props => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <Icon className="fa fa-arrow-right" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;
