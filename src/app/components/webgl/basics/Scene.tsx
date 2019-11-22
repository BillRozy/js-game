import React, { Component } from 'react';
import * as THREE from 'three';

class Scene extends Component {

  private scene: THREE.Scene
  private meshes: Array<THREE.Mesh> = []
  private lights: Array<THREE.Light> = []

  constructor(props) {
    super(props);
    this.scene = new THREE.Scene();
    if (props.registerSceneCB) {
      props.registerSceneCB(this.scene)
    }
  }

  registerMeshCB (): void {
    return (mesh: THREE.Mesh): void => {
      this.meshes.push(mesh)
      this.scene.add(mesh)
    }
  }

  registerLightCB (): void {
    return (light: THREE.Light): void => {
      this.lights.push(light)
      this.scene.add(light)
    }
  }

  render(): HTMLElement {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { 
        registerMeshCB: this.registerMeshCB(),
        registerLightCB: this.registerLightCB()
       })
    );
    return <div>{childrenWithProps}</div>
  }
}

export default Scene;
