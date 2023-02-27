import React from 'react';
import styled from 'styled-components';
import Reset from './assets/Reset';
import { Canvas } from './components/Canvas';
import { Game } from './pages/Game';
import { CanvasProvider } from './context/Canvas';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { AuthProvider } from './context/Auth';

function App() {
  return (
    <>
      <Reset />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route index path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
        {/*  <CanvasProvider>
          <Canvas>
            <Game />
          </Canvas>
        </CanvasProvider> */}
      </AuthProvider>
    </>
  );
  /* const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');

  canvas.width = 1024;
  canvas.height = 576;

  const collisionsMap = [];
  for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, 70 + i));
  };

  const boundaries = [];
  const offset = {
    x: -735,
    y: -650
  };

  collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
      if (symbol === 1025)
        boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width + offset.x,
              y: i * Boundary.height + offset.y
            }
          })
        );
    });
  });

  const characters = [];
  
  const image = new Image();
  image.src = './assets/images/Pellet Town.png';

  const foregroundImage = new Image();
  foregroundImage.src = './assets/images/foregroundObjects.png';

  const playerDownImage = new Image();
  playerDownImage.src = './assets/images/playerDown.png';

  const playerUpImage = new Image();
  playerUpImage.src = './assets/images/playerUp.png';

  const playerLeftImage = new Image();
  playerLeftImage.src = './assets/images/playerLeft.png';

  const playerRightImage = new Image();
  playerRightImage.src = './assets/images/playerRight.png';

  const player = new Sprite({
    position: {
      x: canvas.width / 2 - 192 / 4 / 2,
      y: canvas.height / 2 - 68 / 2
    },
    image: playerDownImage,
    frames: {
      max: 4,
      hold: 10
    },
    sprites: {
      up: playerUpImage,
      left: playerLeftImage,
      right: playerRightImage,
      down: playerDownImage
    }
  });

  const background = new Sprite({
    position: {
      x: offset.x,
      y: offset.y
    },
    image: image
  });

  const foreground = new Sprite({
    position: {
      x: offset.x,
      y: offset.y
    },
    image: foregroundImage
  });

  const keys = {
    w: {
      pressed: false
    },
    a: {
      pressed: false
    },
    s: {
      pressed: false
    },
    d: {
      pressed: false
    }
  };

  const renderables = [
    background,
    ...characters,
    player,
    foreground
  ];

  function animate() {
    const animationId = window.requestAnimationFrame(animate);
    /* renderables.forEach((renderable) => {
      renderable.draw();
    });

    let moving = true;
    player.animate = false;

    if (keys.w.pressed && lastKey === 'w') {
      player.animate = true;
      player.image = player.sprites.up;

      checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: 0, y: 3 }
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
          rectangularCollision({
            rectangle1: player,
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x,
                y: boundary.position.y + 3
              }
            }
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving)
        movables.forEach((movable) => {
          movable.position.y += 3;
        });
    } else if (keys.a.pressed && lastKey === 'a') {
      player.animate = true;
      player.image = player.sprites.left;

      checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: 3, y: 0 }
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
          rectangularCollision({
            rectangle1: player,
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x + 3,
                y: boundary.position.y
              }
            }
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving)
        movables.forEach((movable) => {
          movable.position.x += 3;
        });
    } else if (keys.s.pressed && lastKey === 's') {
      player.animate = true;
      player.image = player.sprites.down;

      checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: 0, y: -3 }
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
          rectangularCollision({
            rectangle1: player,
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x,
                y: boundary.position.y - 3
              }
            }
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving)
        movables.forEach((movable) => {
          movable.position.y -= 3;
        });
    } else if (keys.d.pressed && lastKey === 'd') {
      player.animate = true;
      player.image = player.sprites.right;

      checkForCharacterCollision({
        characters,
        player,
        characterOffset: { x: -3, y: 0 }
      });

      for (let i = 0; i < boundaries.length; i++) {
        const boundary = boundaries[i];
        if (
          rectangularCollision({
            rectangle1: player,
            rectangle2: {
              ...boundary,
              position: {
                x: boundary.position.x - 3,
                y: boundary.position.y
              }
            }
          })
        ) {
          moving = false;
          break;
        }
      }

      if (moving)
        movables.forEach((movable) => {
          movable.position.x -= 3;
        });
    }
  }
  animate();

  let lastKey = '';
  window.addEventListener('keydown', (e) => {
    if (player.isInteracting) {
      switch (e.key) {
      case ' ':
        player.interactionAsset.dialogueIndex++;

        const { dialogueIndex, dialogue } = player.interactionAsset;
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex];
          return;
        }

        // finish conversation
        player.isInteracting = false;
        player.interactionAsset.dialogueIndex = 0;
        document.querySelector('#characterDialogueBox').style.display = 'none';

        break;
      }
      return;
    }

    switch (e.key) {
    case ' ':
      if (!player.interactionAsset) return;

      // beginning the conversation
      const firstMessage = player.interactionAsset.dialogue[0];
      document.querySelector('#characterDialogueBox').innerHTML = firstMessage;
      document.querySelector('#characterDialogueBox').style.display = 'flex';
      player.isInteracting = true;
      break;
    case 'w':
      keys.w.pressed = true;
      lastKey = 'w';
      break;
    case 'a':
      keys.a.pressed = true;
      lastKey = 'a';
      break;

    case 's':
      keys.s.pressed = true;
      lastKey = 's';
      break;

    case 'd':
      keys.d.pressed = true;
      lastKey = 'd';
      break;
    }
  });

  window.addEventListener('keyup', (e) => {
    switch (e.key) {
    case 'w':
      keys.w.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 's':
      keys.s.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
    }
  });

  let clicked = false;
  addEventListener('click', () => {
    if (!clicked) {
      audio.Map.play();
      clicked = true;
    }
  }); */
}

export default App;
