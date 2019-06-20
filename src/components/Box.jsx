import React, { Component } from 'react';
import 'react-dat-gui/build/react-dat-gui.css';
import * as THREE from 'three';
import DatGui, {
  DatBoolean,
  DatColor,
  DatNumber,
  DatString,
} from 'react-dat-gui';
class Box extends Component {
  constructor(props) {
    super(props);
    // this.mount = React.createRef();
  }
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
  init = () => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#eeeeee');
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(this.renderer.domElement);

    let axes = new THREE.AxesHelper(20);
    scene.add(axes);

    let planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
    let planeMaterial = new THREE.MeshBasicMaterial({ color: '#ccc' });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);

    let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    let cubeMaterial = new THREE.MeshBasicMaterial({ color: '#ff0000' });
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;

    scene.add(cube);

    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    console.log(this.renderer);
    this.renderer.render(scene, camera);
  };
  componentDidMount() {
    if (this.mount) {
      this.init();
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default Box;
