import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();
  // const model = useLoader(GLTFLoader, './tree-stump.glb');
  // console.log(model);

  useFrame((state, delta) => {
    // state contains information about our Three.js environment like the camera, the renderer, the scene, etc
    // delta contains the time spent since the last frame in seconds
    // console.log(delta)
    cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
  });


  return (
    <React.Fragment>
      <mesh rotation-y={ Math.PI * 0.25 } position-x={2} scale={ 1.5 }>
          {/* parameters are radius, widthSegments, heightSegments - same order as Three.js */}
          <sphereGeometry args={ [1.5, 32, 32 ]} />  
          <boxGeometry />
          {/* MeshBasicMaterial requires only one parameter and it’s an object */}
          {/* <meshBasicMaterial color="purple" wireframe /> */}
          {/* Writing color="mediumpurple" is like writing material.color.set('mediumpurple')
          Writing wireframe without any value is like setting it to true. We can still set it to false if needed:  */}
       </mesh> 

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <group ref={ groupRef }>
        <mesh position-x={ - 2 }>
          <sphereGeometry />
          <meshBasicMaterial color="green" />
        </mesh>

        <mesh ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
          <boxGeometry />
          <meshBasicMaterial color="mediumpurple" />
        </mesh>
      </group>

      <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
      <ambientLight intensity={ 0.5 } />

      {/* <primitive object={ model.scene } /> */}

      <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
        <planeGeometry />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </React.Fragment>
  )
}

export default Experience;