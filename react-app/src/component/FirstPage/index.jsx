import React from "react";
import ContainerOfChoosingWireCoreType from "../ContainerOfChoosingWireCoreType";
import Title from "../Title";
import componentStyle from "./index.module.css";

export default class FirstPage extends React.Component {
  render() {
    return (
      <div className={componentStyle.container}>
        <Title />
        <ContainerOfChoosingWireCoreType />
      </div>
    );
  }
}
