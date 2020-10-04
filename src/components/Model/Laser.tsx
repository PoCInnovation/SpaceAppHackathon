import React, { useRef, Suspense } from 'react';
import { useLoader, Canvas } from 'react-three-fiber';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Html, Loader } from '@react-three/drei';
import styled from 'styled-components';

const ModelBox = styled.div`
  width: 700px;
  height: 405px;
  background-image: url('/blueprint.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-style: solid;
`;

export function Laser(): JSX.Element {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useLoader(GLTFLoader, '/model/Arm.glb');

  return (
    <group ref={group} dispose={null} />
  );
}

export default function LaserModel(): JSX.Element {
  return (
    <ModelBox>
      <Canvas camera={{ position: [1, 0, 0] }}>
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
          minDistance={-500}
          maxDistance={1000}
        />
        <Suspense
          fallback={(
            <Html center>
              <Loader
                containerStyles={{ backgroundColor: 'transparent' }}
                innerStyles={{ backgroundColor: 'transparent' }}
                barStyles={{ backgroundColor: 'black' }}
                dataStyles={{ backgroundColor: 'transparent' }}
              />
            </Html>
      )}
        >
          <mesh position={[-3, -16.5, 0.5]} scale={[10, 10, 10]}>
            <Laser />
          </mesh>
        </Suspense>
      </Canvas>
    </ModelBox>
  );
}
