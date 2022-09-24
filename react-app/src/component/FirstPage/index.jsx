import React from "react";
import WireTypeChoosing from "./component/WireTypeChoosing";
import Title from "./component/Title";
import componentStyle from "./index.module.css";

export default class FirstPage extends React.Component {
  render() {
    return (
      <div className={componentStyle.container}>
        <Title />
        <WireTypeChoosing />
      </div>
    );
  }
}
