import React from "react";
import componentStyle from "./index.module.css";

export default class ContainerOfChoosingWireCoreType extends React.Component {
  render() {
    return (
      <div className={componentStyle["container"]}>
        <div
          className={`${componentStyle["single-core"]} ${componentStyle["core-type"]}`}
        ></div>
        <div
          className={`${componentStyle["double-core"]} ${componentStyle["core-type"]}`}
        ></div>
      </div>
    );
  }
}
