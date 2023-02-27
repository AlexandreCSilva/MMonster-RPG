import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import { Row, Title, Label, StyledContainer } from '../layouts/Auth';
import Link from '../layouts/Link';
import { AuthContext } from '../context/Auth';
import styled from 'styled-components';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useContext(AuthContext);
  const loadingSignIn = false;
  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    try {
      console.log(email, password);
      alert('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      alert('Não foi possível fazer o login!');
    }
  } 

  return (
    <Wrapper>
      <StyledContainer>
        <Row>
          <Title>MMOnster RPG</Title>
        </Row>
        <Row>
          <Label>Entrar</Label>
          <form onSubmit={submit}>
            <Input label='E-mail' type='text' fullWidth value={email} onChange={e => setEmail(e.target.value)} />
            <Input label='Senha' type='password' fullWidth value={password} onChange={e => setPassword(e.target.value)} />
            <Button type='submit' color='primary' fullWidth disabled={loadingSignIn}>Entrar</Button>
          </form>
        </Row>
        <Row>
          <Link to='/sign-up'>Não possui login? Inscreva-se</Link>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: lightcoral;
`;
