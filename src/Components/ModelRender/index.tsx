import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './index.css';

function Model(): JSX.Element {
  const gltf = useLoader(GLTFLoader, 'Duck.gltf');
  const modelRef = useRef<any>();

  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    if (modelRef.current) modelRef.current.rotation.y += 0.01;
  }, 1);

  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, 0]}
      ref={modelRef}
    />
  );
}

export default function ModelRender(): JSX.Element {
  return (
    <div className="model">
      <Canvas camera={{ position: [50, 0, 0] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        <OrbitControls
          enableDamping
          dampingFactor={0.25}
          rotateSpeed={0.4}
          keyPanSpeed={0.4}
          screenSpacePanning
          zoomSpeed={0.6}
          enablePan
          panSpeed={0.4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={-500}
          maxDistance={1000}
        />
        <Suspense fallback={null}>
          <mesh
            scale={[10, 10, 10]}
            onPointerOver={() => console.log('coucouo')}
            onClick={(e) => console.log(e)}
          >
            <Model />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
