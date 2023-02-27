import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, OrbitControls, OrthographicCamera } from '@react-three/drei';
import styled from 'styled-components';
import { Player } from './components/Player';
import { Physics } from '@react-three/cannon';
import Reset from './assets/Reset';
import { Map } from './components/Map';

function App() {
  const cameraControlsRef = useRef();

  return (
    <AppBox>
      <Reset />
      <Canvas>
        <Suspense fallback={null}>
          <OrthographicCamera
            makeDefault
            zoom={40}
            top={200}
            bottom={-200}
            left={200}
            right={-200}
            near={1}
            far={2000}
            position={[0, 0, 200]}
            ref={cameraControlsRef}
          />
          <Physics
            gravity={[0, 0, 0]}
          >
            <Map />
            <Player cameraRef={cameraControlsRef} />
          </Physics>
        </Suspense>
      </Canvas>
    </AppBox>
  );
}

const AppBox = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
