import React, { useRef, Suspense } from 'react';
import { useLoader, Canvas } from 'react-three-fiber';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Html, Loader } from '@react-three/drei';
import styled from 'styled-components';

type GLTFResult = GLTF & {
  nodes: {
    ['Cube.001_0']: THREE.Mesh
    ['Cube.001_1']: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    ['Cube.004_0']: THREE.Mesh
    ['Cube.004_1']: THREE.Mesh
    ['Cube.004_2']: THREE.Mesh
    Sphere_0: THREE.Mesh
    Sphere_1: THREE.Mesh
  }
  materials: {
    CLAY_MODULE_CAMIR: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.003']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.001']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.004']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.005']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.006']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.007']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.008']: THREE.MeshStandardMaterial
    ['CLAY_MODULE_CAMIR.009']: THREE.MeshStandardMaterial
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

export function ArmLidar(): JSX.Element {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useLoader<GLTFResult>(GLTFLoader, '/ArmLidar.glb');

  return (
    <group ref={group} dispose={null}>
      <group position={[-0.02, 1.47, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.01, 0.03, 0.05]}>
        <mesh material={materials.CLAY_MODULE_CAMIR} geometry={nodes['Cube.001_0'].geometry} />
        <mesh material={materials['CLAY_MODULE_CAMIR.003']} geometry={nodes['Cube.001_1'].geometry} />
      </group>
      <mesh
        material={materials['CLAY_MODULE_CAMIR.001']}
        geometry={nodes.Cube001.geometry}
        position={[-0.02, 1.45, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.01, 0, 0.01]}
      />
      <mesh
        material={materials['CLAY_MODULE_CAMIR.004']}
        geometry={nodes.Cube002.geometry}
        position={[-0.02, 1.45, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.01, 0, 0.01]}
      />
      <group position={[-0.02, 1.44, 0.06]} rotation={[0, 0, -Math.PI / 2]} scale={[0.01, 0, 0.09]}>
        <mesh material={materials['CLAY_MODULE_CAMIR.005']} geometry={nodes['Cube.004_0'].geometry} />
        <mesh material={materials['CLAY_MODULE_CAMIR.006']} geometry={nodes['Cube.004_1'].geometry} />
        <mesh material={materials['CLAY_MODULE_CAMIR.007']} geometry={nodes['Cube.004_2'].geometry} />
      </group>
      <group
        position={[-0.02, 1.68, 0.12]}
        rotation={[-0.56, 0, -Math.PI]}
        scale={[0.01, 0.01, 0.01]}
      >
        <mesh material={materials['CLAY_MODULE_CAMIR.008']} geometry={nodes.Sphere_0.geometry} />
        <mesh material={materials['CLAY_MODULE_CAMIR.009']} geometry={nodes.Sphere_1.geometry} />
      </group>
    </group>
  );
}

export default function ArmLidarModel(): JSX.Element {
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
            <ArmLidar />
          </mesh>
        </Suspense>
      </Canvas>
    </ModelBox>
  );
}
