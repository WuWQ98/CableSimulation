import React from "react";
import * as Renderer from "../../js/renderer";
import componentStyle from "./index.module.css";

export default class ThreeJS extends React.PureComponent {
  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div className={componentStyle["container"]}>
        <canvas
          ref={(ref) => {
            this.threeJsViewer = ref;
          }}
          className={componentStyle["threeJS-viewer"]}
        ></canvas>
        <div
          ref={(ref) => {
            this.threeJsGuiController = ref;
          }}
          className={componentStyle["threeJS-guiController"]}
        ></div>
      </div>
    );
  }

  init = () => {
    this.renderer = Renderer.initRenderer(this.threeJsViewer);
    this.guiController = Renderer.initGuiControl(this.threeJsGuiController);
    this.camera = Renderer.initCamera(this.renderer);
    this.scene = Renderer.initScene();
    this.helper = Renderer.initHelper(this.scene);
    this.light = Renderer.initLight(this.scene);
    this.control = Renderer.initControl(this.camera, this.renderer);
    this.control.addEventListener("change", () => {
      console.log(this);
      this.renderer.render(this.scene, this.camera);
    });
    this.renderer.render(this.scene, this.camera);
  };
}
