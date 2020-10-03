/*
auto-generated by: https://github.com/pmndrs/gltfjsx
author: martinjario (https://sketchfab.com/martinjario)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/skull-downloadable-1a9db900738d44298b0bc59f68123393
title: Skull downloadable
*/
import React, { useRef } from 'react';
import { useGLTFLoader } from '@react-three/drei/loaders/useGLTFLoader';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh
  }
  materials: {
    defaultMat: THREE.MeshStandardMaterial
  }
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTFLoader<GLTFResult>('/scene.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh material={materials.defaultMat} geometry={nodes.mesh_0.geometry} />
      </group>
    </group>
  );
}
