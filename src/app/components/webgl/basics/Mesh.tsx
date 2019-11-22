import React, { Component } from 'react';
import * as THREE from 'three';

interface MeshProps {
  registerMeshCB: (mesh: THREE.Mesh) => void;
}

class Mesh extends Component<MeshProps> {

  private mesh: THREE.Mesh
  private geometry: THREE.Geometry
  private material: THREE.Material

  constructor(props) {
    super(props);
  }

  createMesh (): void {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.props.registerMeshCB(this.mesh)
  }

  registerMaterialCB (): void {
    return (material: THREE.Material): void => {
      this.material = material
      if (this.geometry) {
        this.createMesh();
      }
    }
  }

  registerGeometryCB (): void {
    return (geometry: THREE.Geometry): void => {
      this.geometry = geometry;
      if (this.material) {
        this.createMesh();
      }
    }
  }

  render(): HTMLElement {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { 
        registerMaterialCB: this.registerMaterialCB(),
        registerGeometryCB: this.registerGeometryCB()
       })
    );
    return <div>{childrenWithProps}</div>
  }
}

export default Mesh;
