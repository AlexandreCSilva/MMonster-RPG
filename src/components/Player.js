import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import { Vector2 } from 'three';
import { useControls } from '../hooks/useControls';

export function Player({ cameraRef }) {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 0, 0] }));
  const controls = useControls();
  
  const move = (speed) => {
    api.velocity.set(speed.x, speed.y, 0);
    cameraRef.current.position.x += speed.x / 60;
    cameraRef.current.position.y += speed.y / 60;
  };

  useFrame(() => {
    const { forward, right, backward, left } = controls.current;
    const speed = 3;

    if (forward && right) {
      const velocity = new Vector2(1, 1).normalize();
      velocity.x *= speed;
      velocity.y *= speed;
      move(velocity);
    } else if (forward && left) {
      const velocity =  new Vector2(-1, 1).normalize();
      velocity.x *= speed;
      velocity.y *= speed;
      move(velocity);
    } else if (forward) {
      const velocity =  new Vector2(0, speed);
      move(velocity);
    } else if (backward && right) {
      const velocity = new Vector2(1, -1).normalize();
      velocity.x *= speed;
      velocity.y *= speed;
      move(velocity);
    } else if (backward && left) {
      const velocity =  new Vector2(-1, -1).normalize();
      velocity.x *= speed;
      velocity.y *= speed;
      move(velocity);
    } else if (backward) {
      const velocity =  new Vector2(0, -speed);
      move(velocity);
    } else if (right) {
      const velocity =  new Vector2(speed, 0);
      move(velocity);
    } else if (left) {
      const velocity =  new Vector2(-speed, 0);
      move(velocity);
    } else {
      const velocity =  new Vector2(0, 0);
      move(velocity);
    }
  });

  return (
    <>
      <mesh ref={ref}>
        <planeGeometry args={[1, 1, 1]} />
        <meshBasicMaterial attach='material' color={'red'} />
      </mesh>
    </>
  );
};
