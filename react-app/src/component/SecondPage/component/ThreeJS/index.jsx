import React from "react";
import * as Renderer from "../../js/renderer";
import componentStyle from "./index.module.css";

export default class ThreeJS extends React.PureComponent {
  constructor(props) {
    super(props);
    this.threeJsViewer = React.createRef();
    this.threeJsGuiController = React.createRef();
  }
  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div className={componentStyle["container"]}>
        <canvas
          ref={this.threeJsViewer}
          className={componentStyle["threeJS-viewer"]}
        ></canvas>
        <div
          ref={this.threeJsGuiController}
          className={componentStyle["threeJS-guiController"]}
        ></div>
      </div>
    );
  }

  init = () => {
    this.renderer = Renderer.initRenderer(this.threeJsViewer.current);
    this.guiController = Renderer.initGuiControl(
      this.threeJsGuiController.current
    );
    this.camera = Renderer.initCamera(this.renderer);
    this.scene = Renderer.initScene();
    // this.helper = Renderer.initHelper(this.scene);
    this.light = Renderer.initLight(this.scene);
    this.control = Renderer.initControl(this.camera, this.renderer);
    this.control.addEventListener("change", () => {
      this.renderer.render(this.scene, this.camera);
    });
    this.renderer.render(this.scene, this.camera);
  };
}
