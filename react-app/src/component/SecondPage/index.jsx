import React from "react";
import componentStyle from "./index.module.css";

export default class SecondPage extends React.Component {
  render() {
    return (
      <div className={componentStyle.container}>
        <div className={componentStyle["params-input"]}></div>
        <div className={componentStyle["threeJS-viewer"]}></div>
      </div>
    );
  }
}
