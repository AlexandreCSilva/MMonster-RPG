import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import React from 'react';

export function Map() {
  const texture = useLoader(THREE.TextureLoader, 'https://raw.githubusercontent.com/chriscourses/pokemon-style-game/main/img/Pellet%20Town.png');
  return (
    <mesh>
      <planeGeometry attach="geometry" args={[70, 40]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};
