import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshNormalMaterial } from 'three';
import Experience from './Experience.js'

function App() {
  return (
   <Canvas>
    <Experience />
   </Canvas>
  );
}

export default App;