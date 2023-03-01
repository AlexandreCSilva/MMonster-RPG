import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export function Sprite({ image, ...props }) {
  const texture = useLoader(TextureLoader, image);

  return (
    <sprite {...props}>
      <spriteMaterial attach='material' map={texture} />
    </sprite>
  );
};
