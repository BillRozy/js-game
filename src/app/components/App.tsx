import React, { Component } from 'react';
import Renderer from 'Components/webgl/basics/Renderer';
import Scene from 'Components/webgl/basics/Scene';
import Camera from 'Components/webgl/basics/Camera';
import Mesh from 'Components/webgl/basics/Mesh';
import Control from 'Components/webgl/basics/Control';
import Geometry from 'Components/webgl/basics/Geometry';
import Material from 'Components/webgl/basics/Material';

import '@/style/App.scss';


class App extends Component {
  render (): HTMLElement {
    return (
      <div>
        <h1>My React App!</h1>
        <Renderer>
          <Scene>
            <Mesh>
              <Geometry></Geometry>
              <Material materialOpts={{"color": 0x0000ff, "wireframe": true}}></Material>
            </Mesh>
            <Mesh>
              <Geometry clazz="PlaneGeometry" clazzParams={[1000, 1000, 12, 12]}></Geometry>
              <Material materialOpts={{"color": 0xff0000, "wireframe": true}}></Material>
            </Mesh>
          </Scene>
          <Camera>
            <Control/>
          </Camera>
        </Renderer>
      </div>
    );
  }
}

export default App;
