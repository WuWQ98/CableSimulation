import React from "react";
import InputContainer from "./component/InputContainer";
import Echart from "./component/Echart";
import ThreeJS from "./component/ThreeJS";
import componentStyle from "./index.module.css";

export default class SecondPage extends React.Component {
  render() {
    return (
      <div className={componentStyle.container}>
        <InputContainer />
        <div>
          <Echart />
          <ThreeJS />
        </div>
      </div>
    );
  }
}
