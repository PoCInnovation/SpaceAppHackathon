import React, { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Duck() {
  const gltf = useLoader(GLTFLoader, 'Duck.gltf');
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

export default function ModelRender(): JSX.Element {
  return (
    <div className="Duck">
      <Canvas camera={{ position: [10, 10, 10] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        <Suspense fallback={null}>
          <mesh
            scale={[10, 10, 10]}
          >
            <Duck />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
