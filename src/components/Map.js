import { useContext, useEffect } from 'react';
import { CanvasContext } from '../context/Canvas';
import React from 'react';
import mapTexture from '../assets/images/Pellet Town.png';
import { useTexture } from '@react-three/drei';

export function Map() {
  const texture = useTexture(mapTexture);

  return (
    <mesh>
      <planeGeometry args={[80, 50]} />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  );
};
