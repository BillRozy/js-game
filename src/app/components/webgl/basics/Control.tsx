import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class Control extends Component {

  private control: Record<string, any>

  constructor(props) {
    super(props);
    this.control = new OrbitControls( props.camera, props.domElement );
    if (props.registerControlCB) {
      props.registerControlCB(this.control)
    }
  }


  render(): HTMLElement {
    return (
      <div
      />
    );
  }
}

export default Control;
