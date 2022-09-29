import React from "react";
import CoreType from "./component/CoreType";
import componentStyle from "./index.module.css";
import img_single_core from "../../img/single_core.jpeg";
import img_double_core from "../../img/double_core.jpg";

export default class WireTypeChoosing extends React.Component {
  render() {
    return (
      <div
        className={componentStyle["container"]}
        style={{
          visibility: this.props.showNext ? "visible" : "hidden",
        }}
      >
        <CoreType type={"单芯线缆"} img={img_single_core} />
        <CoreType type={"双芯线缆"} img={img_double_core} />
      </div>
    );
  }
}
