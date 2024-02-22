/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

export function Computer(props) {
  const { nodes, materials } = useGLTF("/lowres computer.glb");
  const colorMap = useLoader(TextureLoader, "retropc_0.png");
  const pc = useRef();
  useFrame(({ clock }) => {
    pc.current.rotation.y = clock.getElapsedTime()
  })
  return (
    <group ref={pc} {...props} dispose={null}>
      <mesh map={colorMap} castShadow receiveShadow geometry={nodes.PC.geometry} material={materials.TextureGrid} position={[0, -0.5, -0.031]} rotation={[0.087, 0, 0]} />
      <mesh map={colorMap} castShadow receiveShadow geometry={nodes.Monitor.geometry} material={materials.TextureGrid} position={[0, 0, 0.031]} rotation={[0.087, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Mouse.geometry} material={materials.TextureGrid} position={[0.875, -0.437, 0.75]} rotation={[0.087, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Keyboard.geometry} material={materials.TextureGrid} position={[0, -0.438, 0.813]} rotation={[0.087, 0, 0]} />
    </group>
  );
}

useGLTF.preload("/lowres computer.glb");
