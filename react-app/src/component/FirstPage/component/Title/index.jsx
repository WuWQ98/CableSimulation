import React from "react";
import componentStyle from "./index.module.css";

export default class Title extends React.Component {
  render() {
    return (
      <div className={componentStyle["heading-primary"]}>
        <h2>
          <span>线</span>
          <span>缆</span>
          <span>系</span>
          <span>统</span>
          <span>电</span>
          <span>磁</span>
          <span>兼</span>
          <span>容</span>
          <span>性</span>
          <span>能</span>
          <span>评</span>
          <span>估</span>
          <span>与</span>
          <span>信</span>
          <span>号</span>
          <span>完</span>
          <span>整</span>
          <span>性</span>
          <span>验</span>
          <span>证</span>
          <span>软</span>
          <span>件</span>
        </h2>
        <div className={componentStyle["btn-arrow"]}>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
