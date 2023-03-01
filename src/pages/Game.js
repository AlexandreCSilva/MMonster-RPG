import React, { useContext } from 'react';
import { CanvasProvider } from '../context/Canvas';
import styled from 'styled-components';
import { AuthContext } from '../context/Auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

export function Game() {
  const { userData } = useContext(AuthContext);
  const db = getDatabase();
  const navigate = useNavigate();
  
  let playerId = userData.uid;
  let playerRef = ref(db, 'players/' + playerId);

  set(playerRef, {
    id: playerId,
    username: 'name',
    level: 0,
    x: 0,
    y: 0,
  });

  function initGame() {
    const allPlayersRef = ref(db, 'players/');

    onValue(allPlayersRef, (snapshot) => {
      let players = snapshot.val() || {};
      Object.keys(players).forEach((key) => {
        console.log(players[key]);
      });
    });
  };

  initGame();

  return (
    <GameBox>
      <Title onClick={ () => navigate('/') }>
        MMOnster-RPG
      </Title>
      <GameContainer>
        <canvas></canvas>
      </GameContainer>
    </GameBox>
  );
};

const GameBox = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  height: 50px;
  width: 150px;
  margin-left: -75px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const GameContainer = styled.div`
overflow: hidden;
position: relative;
width: 480px;
height: 260px;
outline: 1px solid #fff;
margin: 30px auto 0 auto;
box-shadow: rgba(0, 0, 0, 0.95) 0px 15px 25px;
background-color: #333;
transform: scale(3) translateY(35%);

canvas {
  transform: scale(3);
  image-rendering: pixelated;
  background-color: rgba(0, 0, 0, 0.5);
}
`;
