import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';
import { Vector2 } from 'three';
import { useControls } from '../hooks/useControls';
import playerDown1 from '../assets/images/player/playerDown1.png';
import playerDown2 from '../assets/images/player/playerDown2.png';
import playerDown3 from '../assets/images/player/playerDown3.png';
import playerDown4 from '../assets/images/player/playerDown4.png';
import { Sprite } from './Sprites';

export function Player({ cameraRef }) {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 0, 0] }));
  const controls = useControls();
  const [playerSprite, setPlayerSprite] = useState(playerDown1);
  const playerDown = [playerDown1, playerDown2, playerDown3, playerDown4];

  const move = (speed) => {
    api.velocity.set(speed.x, speed.y, 0);
    cameraRef.current.position.x += speed.x / 60;
    cameraRef.current.position.y += speed.y / 60;
  };

  useFrame(() => {
    const { forward, right, backward, left } = controls.current;
    const speed = 4;

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
      setPlayerSprite(playerDown[1]);
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
    <mesh 
      ref={ref}
    >
      <Sprite image={playerSprite} scale={[1.3, 1.7, 1]} />
    </mesh>
  );
};
