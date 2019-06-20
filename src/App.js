import React, { Component } from 'react';
import 'react-dat-gui/build/react-dat-gui.css';
import * as THREE from 'three';
import './App.css';
import DatGui, {
  DatBoolean,
  DatColor,
  DatNumber,
  DatString,
} from 'react-dat-gui';
class App extends Component {
  state = {
    data: {
      package: 'react-dat-gui',
      power: 9000,
      isAwesome: true,
      feelsLike: '#2FA1D6',
      cameraPosition: 4,
    },
  };
  handleUpdate = data => this.setState({ data });
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.camera.position.z = this.state.data.cameraPosition;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = document.body.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = this.state.data.cameraPosition;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.start();
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <DatGui data={data} onUpdate={this.handleUpdate}>
          <DatString path="package" label="Package" />
          <DatNumber
            path="power"
            label="Power"
            min={9000}
            max={9999}
            step={1}
          />
          <DatNumber
            path="cameraPosition"
            label="cameraPosition"
            min={0}
            max={10}
            step={1}
          />
          <DatBoolean path="isAwesome" label="Awesome?" />
          <DatColor path="feelsLike" label="Feels Like" />
        </DatGui>
        <div
          style={{ width: '100%', height: '100%' }}
          ref={mount => {
            this.mount = mount;
          }}
        />
      </React.Fragment>
    );
  }
}
export default App;
