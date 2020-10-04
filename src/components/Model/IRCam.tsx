import React, { useRef, Suspense } from 'react';
import { useLoader, Canvas } from 'react-three-fiber';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Html, Loader } from '@react-three/drei';
import styled from 'styled-components';

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh
    Cylinder_0: THREE.Mesh
    Cylinder_1: THREE.Mesh
    Cylinder_2: THREE.Mesh
    ['Cube.001_0']: THREE.Mesh
    ['Cube.001_1']: THREE.Mesh
  }
  materials: {
    ['CLAY_MODULE_CAMIR.001']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.002']: THREE.MeshStandardMaterial
    ['CLAY_MODULE.002']: THREE.MeshStandardMaterial
    CLAY_MODULE_CAMIR: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.003']: THREE.MeshStandardMaterial
  }
};

const ModelBox = styled.div`
  width: 700px;
  height: 405px;
  background-image: url('/blueprint.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-style: solid;
`;

export function IRCam(): JSX.Element {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useLoader<GLTFResult>(GLTFLoader, '/IRCam.glb');

  if (group) console.log(group);

  return (
    <group ref={group} dispose={null}>
      <group position={[0, 0, -0.03]}>
        <mesh
          material={materials['CLAY_MODULE_CAMIR.001']}
          geometry={nodes.Cube001.geometry}
          position={[0.16, 1.66, -0.07]}
          scale={[0.01, 0, 0.01]}
        />
        <group
          position={[0.17, 1.66, -0.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.01, 0.04, 0.01]}
        >
          <mesh material={materials['CLAY_MODULE_CAMIR.001']} geometry={nodes.Cylinder_0.geometry} />
          <mesh material={materials['CLAY_MODULE_CAMIR.002']} geometry={nodes.Cylinder_1.geometry} />
          <mesh material={materials['CLAY_MODULE.002']} geometry={nodes.Cylinder_2.geometry} />
        </group>
      </group>
      <group position={[0.14, 1.66, -0.06]} scale={[0.01, 0.03, 0.05]}>
        <mesh material={materials.CLAY_MODULE_CAMIR} geometry={nodes['Cube.001_0'].geometry} />
        <mesh material={materials['CLAY_MODULE_CAMIR.003']} geometry={nodes['Cube.001_1'].geometry} />
      </group>
    </group>
  );
}

export default function IRCamModel(): JSX.Element {
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
          <mesh position={[-3, -16.5, 0.5]} scale={[10, 10, 10]} rotation={[0, 0, 0]}>
            <IRCam />
          </mesh>
        </Suspense>
      </Canvas>
    </ModelBox>
  );
}
