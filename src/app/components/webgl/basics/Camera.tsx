import React, { Component } from 'react';
import * as THREE from 'three';

class Camera extends Component {

  private camera: THREE.Camera
  private controls: Array<Record<string, any>> = []
  private selectedControl: null

  constructor(props) {
    super(props);
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);
    this.camera.position.set(0, 0, 1000);
    if (props.registerCameraCB) {
      props.registerCameraCB(this.camera, this.selectedControl)
    }
  }

  registerControlCB () {
    return (control) => {
      this.controls.push(control)
      this.selectedControl = control
    }
  }


  render(): HTMLElement {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        domElement: this.props.domElement,
        camera: this.camera,
        registerControlCB: this.registerControlCB()
       })
    );
    return <div>{childrenWithProps}</div>
  }
}

export default Camera;
