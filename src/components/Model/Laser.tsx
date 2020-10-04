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
    Sphere001: THREE.Mesh
    Sphere002: THREE.Mesh
    Sphere003: THREE.Mesh
    Cube006: THREE.Mesh
    ['Cube.006_0']: THREE.Mesh
    ['Cube.006_1']: THREE.Mesh
    Cube004: THREE.Mesh
  }
  materials: {
    ['CLAY_MODULE_CAMIR.013']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.011']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.002']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.001']: THREE.MeshStandardMaterial
  }
};

export function Laser(): JSX.Element {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useLoader<GLTFResult>(GLTFLoader, '/model/Laser.glb');

  return (
    <group ref={group} dispose={null}>
      <mesh
        material={nodes.Sphere001.material}
        geometry={nodes.Sphere001.geometry}
        position={[0, 0.03, 0.04]}
        scale={[0, 0, 0]}
      />
      <mesh
        material={nodes.Sphere002.material}
        geometry={nodes.Sphere002.geometry}
        position={[0, 0.03, 0.04]}
        scale={[0, 0, 0]}
      />
      <mesh
        material={nodes.Sphere003.material}
        geometry={nodes.Sphere003.geometry}
        position={[0, 0.02, 0.04]}
        scale={[0, 0, 0]}
      />
      <mesh
        material={materials['CLAY_MODULE_CAMIR.013']}
        geometry={nodes.Cube006.geometry}
        position={[0, 0.01, -0.03]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.01, 0, 0.01]}
      />
      <group rotation={[0, 0, Math.PI / 2]} scale={[0.01, 0.03, 0.05]}>
        <mesh material={materials['CLAY_MODULE_CAMIR.011']} geometry={nodes['Cube.006_0'].geometry} />
        <mesh material={materials['CLAY_MODULE_CAMIR.002']} geometry={nodes['Cube.006_1'].geometry} />
      </group>
      <mesh
        material={materials['CLAY_MODULE_CAMIR.001']}
        geometry={nodes.Cube004.geometry}
        position={[0, 0.03, 0]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.01, 0.01, -0.05]}
      />
    </group>
  );
}

export default function LaserModel(): JSX.Element {
  return (
    <ModelBox>
      <Canvas camera={{ position: [15, -50, 50] }}>
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
          <mesh position={[0, -3, 2.5]} scale={[300, 300, 300]}>
            <Laser />
          </mesh>
        </Suspense>
      </Canvas>
    </ModelBox>
  );
}
