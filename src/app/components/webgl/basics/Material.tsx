import React, { Component } from 'react';
import * as THREE from 'three';

interface MaterialProps {
  registerMaterialCB: (material: THREE.Material) => void;
  materialOpts: THREE.MaterialParameters;
}

class Material extends Component<MaterialProps> {

  private material: THREE.Material

  constructor(props) {
    super(props);
    this.material = new THREE.MeshBasicMaterial(props.materialOpts)
    if (props.registerMaterialCB) {
      props.registerMaterialCB(this.material)
    }
  }

  render(): HTMLElement {
    return (
      <div
      />
    );
  }
}

export default Material;
