import React, { useRef, Suspense } from 'react';
import { useFrame, useLoader, Canvas } from 'react-three-fiber';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { draco, OrbitControls, Html, Loader } from '@react-three/drei';
import styled from 'styled-components';

type GLTFResult = GLTF & {
  nodes: {
    HELMET_GLASS: THREE.Mesh
    Status_Data: THREE.Mesh
    AR_Nav_1: THREE.Mesh
    Left_Up: THREE.Mesh
    Map: THREE.Mesh
    Nav: THREE.Mesh
    Panel_Down: THREE.Mesh
    Panel_Up: THREE.Mesh
    Plane001: THREE.Mesh
    Plane002: THREE.Mesh
    Right_Down: THREE.Mesh
    Right_Up: THREE.Mesh
    Status: THREE.Mesh
    Suit: THREE.Mesh
  }
  materials: {
    ['CLAY.002']: THREE.MeshStandardMaterial
    ['HudVitals.010']: THREE.MeshStandardMaterial
    ['HudVitals.003']: THREE.MeshStandardMaterial
    ['HudVitals.004']: THREE.MeshStandardMaterial
    ['HudVitals.005']: THREE.MeshStandardMaterial
    Hud: THREE.MeshStandardMaterial
    ['HudVitals.002']: THREE.MeshStandardMaterial
    ['HudVitals.001']: THREE.MeshStandardMaterial
    HudVitals: THREE.MeshStandardMaterial
    ['HudVitals.008']: THREE.MeshStandardMaterial
    ['HudVitals.007']: THREE.MeshStandardMaterial
    ['HudVitals.017']: THREE.MeshStandardMaterial
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

export function Hud(): JSX.Element {
  const group = useRef<THREE.Group>();
  const modelRef = useRef<any>();
  const { nodes, materials } = useLoader<GLTFResult>(GLTFLoader, '/hud.glb', draco('/draco-gltf/'));

  useFrame(({ gl, scene, camera }) => {
    gl.render(scene, camera);
    if (modelRef.current) modelRef.current.rotation.y += 0.005;
  }, 1);

  return (
    <group ref={group} dispose={null}>
      <mesh
        material={materials['CLAY.002']}
        geometry={nodes.HELMET_GLASS.geometry}
        position={[0, -13.58, 0.26]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[8.65, 8.65, 8.65]}
      />
      <mesh
        material={nodes.Status_Data.material}
        geometry={nodes.Status_Data.geometry}
        position={[0.63, 0.7, -0.68]}
        rotation={[1.55, -0.03, 0.96]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        material={materials['HudVitals.010']}
        geometry={nodes.AR_Nav_1.geometry}
        position={[-0.18, -0.36, 0.82]}
        rotation={[0.39, -0.02, -0.04]}
        scale={[1.64, 1.64, 1.64]}
      />
      <mesh
        material={materials['HudVitals.003']}
        geometry={nodes.Left_Up.geometry}
        position={[-1.7, 0.64, 0.84]}
        rotation={[1.64, -0.04, -0.98]}
      />
      <mesh
        material={materials['HudVitals.004']}
        geometry={nodes.Map.geometry}
        position={[-1.7, 0.57, 0.84]}
        rotation={[1.64, -0.04, -0.98]}
      />
      <mesh
        material={materials['HudVitals.005']}
        geometry={nodes.Nav.geometry}
        position={[-0.69, 0.6, -0.56]}
        rotation={[Math.PI / 2, 0, -0.41]}
        scale={[0.1, 0.1, 0.1]}
      />
      <mesh
        material={materials['HudVitals.002']}
        geometry={nodes.Plane001.geometry}
        position={[0.2, 0.33, -0.62]}
        rotation={[0.41, -0.27, 0.07]}
        scale={[0.41, 0.41, 0.41]}
      />
      <mesh
        material={materials['HudVitals.001']}
        geometry={nodes.Plane002.geometry}
        position={[0, 0.1, -0.15]}
        rotation={[0.4, -0.14, 0.01]}
        scale={[0.82, 0.82, 0.82]}
      />
      <mesh
        material={materials.HudVitals}
        geometry={nodes.Right_Down.geometry}
        position={[-0.2, 0.1, -2.07]}
        rotation={[1.61, 0.05, 0.98]}
      />
      <mesh
        material={materials['HudVitals.008']}
        geometry={nodes.Right_Up.geometry}
        position={[-0.2, 0.72, -2.07]}
        rotation={[1.61, 0.05, 0.98]}
      />
      <mesh
        material={materials['HudVitals.007']}
        geometry={nodes.Status.geometry}
        position={[-0.2, 0.61, -2.07]}
        rotation={[1.61, 0.05, 0.98]}
      />
      <mesh
        material={materials['HudVitals.017']}
        geometry={nodes.Suit.geometry}
        position={[-1.7, 0.22, 0.84]}
        rotation={[1.64, -0.04, -0.98]}
      />
    </group>
  );
}

export default function HudModel(): JSX.Element {
  return (
    <ModelBox>
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
          <mesh scale={[10, 10, 10]}>
            <Hud />
          </mesh>
        </Suspense>
      </Canvas>
    </ModelBox>
  );
}
