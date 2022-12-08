import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber'

function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    // state contains information about our Three.js environment like the camera, the renderer, the scene, etc
    // delta contains the time spent since the last frame in seconds
    // console.log(delta)
    cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
  });


  return (
    <React.Fragment>
      {/* <mesh rotation-y={ Math.PI * 0.25 } position-x={2} scale={ 1.5 }>
          {/* parameters are radius, widthSegments, heightSegments - same order as Three.js */}
          {/* <sphereGeometry args={ [1.5, 32, 32 ]} />   */}
          <boxGeometry />
          {/* MeshBasicMaterial requires only one parameter and it’s an object */}
          <meshBasicMaterial color="purple" wireframe />
          {/* Writing color="mediumpurple" is like writing material.color.set('mediumpurple')
          Writing wireframe without any value is like setting it to true. We can still set it to false if needed:  */}
      {/* </mesh> */ }

      <group ref={ groupRef }>
        <mesh position-x={ - 2 }>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>

        <mesh ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
          <boxGeometry />
          <meshBasicMaterial color="mediumpurple" />
        </mesh>
      </group>

      <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </React.Fragment>
  )
}

export default Experience;