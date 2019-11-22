import React, { Component } from 'react';
import * as THREE from 'three';

interface GeometryProps {
  registerGeometryCB: (geometry: THREE.Geometry) => void;
  clazz?: string;
  clazzParams?: Array<any>;
}

class Geometry extends Component<GeometryProps> {

  private geometry: THREE.Geometry

  constructor(props) {
    super(props);
    const clazz = this.props.clazz ? THREE[this.props.clazz] : THREE.SphereGeometry
    this.geometry = new clazz(...(this.props.clazzParams || [200, 12, 12]))
    if (props.registerGeometryCB) {
      props.registerGeometryCB(this.geometry)
    }
  }

  render(): HTMLElement {
    return (
      <div
      />
    );
  }
}

export default Geometry;
