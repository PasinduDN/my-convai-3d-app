import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

function App() {
  return (
     <div style={{ width: '100vw', height: '100vh', background: '#222' }}>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 75 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Ground Plane (Optional, but good for context) */}
        <mesh rotation-x={-Math.PI / 2} position={[0, -0.5, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="green" />
        </mesh>

        {/* A simple box to ensure 3D is working */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        {/* OrbitControls allows you to move the camera around */}
        <OrbitControls />

        {/* Environment for nice lighting and reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

export default App
