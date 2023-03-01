import styled from 'styled-components';

export const StyledContainer = styled.div`
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: max-content;
  height: auto;
  max-height: initial;
  max-width: 400px;
  margin: auto;

  @media (max-width: 600px) {
    border-radius: 0;
    min-height: 100vh;
    height: auto;
    max-height: initial;
    min-width: 100%;
    max-width: initial;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px; 
`;

export const Label = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  padding: 30px;
`;
