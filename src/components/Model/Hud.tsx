import React, { useRef, Suspense } from 'react';
import { useFrame, useLoader, Canvas } from 'react-three-fiber';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Html, Loader } from '@react-three/drei';
import styled from 'styled-components';

type GLTFResult = GLTF & {
  nodes: {
    AR_Nav_1001: THREE.Mesh
    AR_Nav_1002: THREE.Mesh
    AR_Nav_1003: THREE.Mesh
    Plane: THREE.Mesh
    Plane003: THREE.Mesh
    Plane004: THREE.Mesh
    Plane005: THREE.Mesh
    Plane007: THREE.Mesh
    Plane008: THREE.Mesh
    Plane009: THREE.Mesh
    Plane010: THREE.Mesh
  }
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ORANGE: THREE.MeshStandardMaterial
    GREEN: THREE.MeshStandardMaterial
    BLUE: THREE.MeshStandardMaterial
    ['GREEN.001']: THREE.MeshStandardMaterial
  }
}


const ModelBox = styled.div`
  width: 700px;
  height: 405px;
  background-image: url('/blueprint.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-style: solid;
`;

export function Hud(): JSX.Element {
  const group = useRef<THREE.Group>();
  const modelRef = useRef<any>();
  const { nodes, materials } = useLoader<GLTFResult>(GLTFLoader, '/hud.glb');

  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    if (modelRef.current) modelRef.current.rotation.y += 0.005;
  }, 1);

  return (
    <group ref={group} dispose={null}>
      <mesh
        material={materials['Material.003']}
        geometry={nodes.AR_Nav_1001.geometry}
        position={[-0.06, -0.26, 1.18]}
        rotation={[0.39, -0.02, -0.04]}
        scale={[1.64, 1.64, 1.64]}
      />
      <mesh
        material={materials['Material.004']}
        geometry={nodes.AR_Nav_1002.geometry}
        position={[-0.01, 0.09, 0.03]}
        rotation={[0.4, -0.19, 0.03]}
        scale={[0.82, 0.82, 0.82]}
      />
      <mesh
        material={materials['Material.005']}
        geometry={nodes.AR_Nav_1003.geometry}
        position={[0.15, 0.27, -0.43]}
        rotation={[0.41, -0.29, 0.08]}
        scale={[0.41, 0.41, 0.41]}
      />
      <mesh
        material={materials['Material.002']}
        geometry={nodes.Plane.geometry}
        position={[-0.4, 0.61, -0.2]}
        rotation={[Math.PI / 2, 0, -0.74]}
        scale={[0.17, 0.16, 0.1]}
      />
      <mesh
        material={materials['Material.001']}
        geometry={nodes.Plane003.geometry}
        position={[-0.4, 0.38, -0.2]}
        rotation={[Math.PI / 2, 0, -0.74]}
        scale={[0.17, 0.16, 0.1]}
      />
      <mesh
        material={materials.ORANGE}
        geometry={nodes.Plane004.geometry}
        position={[-0.4, 0.75, -0.2]}
        rotation={[Math.PI / 2, 0, -0.74]}
        scale={[0.17, 0.16, 0.02]}
      />
      <mesh
        material={materials.GREEN}
        geometry={nodes.Plane005.geometry}
        position={[0.58, 0.75, -0.2]}
        rotation={[Math.PI / 2, 0, -2.32]}
        scale={[0.17, 0.16, 0.02]}
      />
      <mesh
        material={materials.GREEN}
        geometry={nodes.Plane007.geometry}
        position={[0.58, 0.53, -0.2]}
        rotation={[Math.PI / 2, 0, -2.32]}
        scale={[0.17, 0.16, 0.17]}
      />
      <mesh
        material={materials.BLUE}
        geometry={nodes.Plane008.geometry}
        position={[-0.4, 0.86, -0.2]}
        rotation={[Math.PI / 2, 0, -0.74]}
        scale={[0.17, 0.16, 0.02]}
      />
      <mesh
        material={materials.BLUE}
        geometry={nodes.Plane009.geometry}
        position={[-0.4, 0.19, -0.2]}
        rotation={[Math.PI / 2, 0, -0.74]}
        scale={[0.17, 0.16, 0.02]}
      />
      <mesh
        material={materials['GREEN.001']}
        geometry={nodes.Plane010.geometry}
        position={[0.58, 0.31, -0.2]}
        rotation={[Math.PI / 2, 0, -2.32]}
        scale={[0.17, 0.16, 0.02]}
      />
    </group>
  );
}

export default function HudModel(): JSX.Element {
  return (
    <ModelBox>
      <Canvas camera={{ position: [10, 0, 0] }}>
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
          <mesh position={[0, -3, 2.5]} scale={[10, 10, 10]} rotation={[0, -30, 0]}>
            <Hud />
          </mesh>
        </Suspense>
      </Canvas>
    </ModelBox>
  );
}
