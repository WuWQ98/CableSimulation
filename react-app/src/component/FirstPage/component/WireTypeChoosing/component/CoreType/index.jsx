import React from "react";
import componentStyle from "./index.module.css";
import { InputNumber } from "antd";

export default class CoreType extends React.Component {
  render() {
    return (
      <div className={componentStyle["container"]}>
        <div className={componentStyle["font"]}>
          <div
            style={{
              backgroundImage: `
              linear-gradient(to right bottom,rgba(1, 15, 23, 0.5),rgba(62, 1, 226, 0.5)),
              url(${this.props.img})
            `,
            }}
          ></div>
          <div>{this.props.type}</div>
        </div>
        <div className={componentStyle["back"]}>
          <div className={componentStyle["input-list"]}>
            <label>导体电导率</label>
            <InputNumber
              style={{ width: "200px" }}
              defaultValue="1"
              min="0"
              step="1e6"
              stringMode
            />
          </div>
        </div>
      </div>
    );
  }
}
