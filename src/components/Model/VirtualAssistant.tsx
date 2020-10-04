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

type GLTFResult = GLTF & {
  nodes: {
    HELMET_BASE: THREE.Mesh
    HELMET_GLASS: THREE.Mesh
    HELMET_METAL_PARTS: THREE.Mesh
    BOTTLE_TUBE: THREE.Mesh
    Cube: THREE.Mesh
  }
  materials: {
    CLAY: THREE.MeshStandardMaterial
    VISOR: THREE.MeshStandardMaterial
    ARMATURE: THREE.MeshStandardMaterial
    ['CLAY.001']: THREE.MeshStandardMaterial
    ['CLAY_NORMAL_MAP.001']: THREE.MeshStandardMaterial
  }
};

export function Arm(): JSX.Element {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useLoader<GLTFResult>(GLTFLoader, '/model/VirtualAssistant.glb');

  return (
    <group ref={group} dispose={null}>
      <mesh material={materials.CLAY} geometry={nodes.HELMET_BASE.geometry} />
      <mesh material={materials.VISOR} geometry={nodes.HELMET_GLASS.geometry} />
      <mesh material={materials.ARMATURE} geometry={nodes.HELMET_METAL_PARTS.geometry} />
      <mesh material={materials['CLAY.001']} geometry={nodes.BOTTLE_TUBE.geometry} />
      <mesh
        material={materials['CLAY_NORMAL_MAP.001']}
        geometry={nodes.Cube.geometry}
        position={[0, 1.62, -0.16]}
        scale={[0.05, 0.05, 0.05]}
      />
    </group>
  );
}

export default function ArmModel(): JSX.Element {
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
            <Arm />
          </mesh>
        </Suspense>
      </Canvas>
    </ModelBox>
  );
}
