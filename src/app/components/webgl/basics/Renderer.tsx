import React, { Component } from 'react';
import * as THREE from 'three';
import Camera from 'Components/webgl/Camera';
import Scene from 'Components/webgl/Scene';

import 'Style/Canvas3.scss';

class Renderer extends Component {

  private $el = React.createRef<HTMLDivElement>()
  private clock: THREE.Clock
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private cameras: Array<THREE.Camera> = []
  private controls: Array<Record<string, any>> = []
  private childrenObserver = null

  constructor(props) {
    super(props);
    this.clock = new THREE.Clock();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000);
    this.state = {
      selectedCamera: null,
      selectedControl: null
    };
  }

  componentDidMount(): void {
    this.$el.current.appendChild(this.renderer.domElement);
    this.renderGL();
  }

  componentWillUnmount(): void {
    // on unmount
  }

  registerSceneCB (): void {
    return (scene: THREE.Scene): void => {
      this.scene = scene
    }
  }

  registerCameraCB (): void {
    return (camera: THREE.Camera, control): void => {
      this.cameras.push(camera)
      this.controls.push(control)
      this.setState({
        selectedCamera: camera,
        selectedControl: control
      })
    }
  }

  renderGL(): void {
    requestAnimationFrame(this.renderGL.bind(this));
    if (this.state.selectedControl) {
      const delta = this.clock.getDelta();
      this.state.selectedControl.update(delta);
    }
    if (this.scene && this.state.selectedCamera) {
      this.renderer.render(this.scene, this.state.selectedCamera);
    }
  }

  render(): HTMLElement {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { 
        domElement: this.renderer.domElement,
        registerSceneCB: this.registerSceneCB(),
        registerCameraCB: this.registerCameraCB()
       })
    );
    return <div ref={this.$el}>{childrenWithProps}</div>
  }
}

export default Renderer;
