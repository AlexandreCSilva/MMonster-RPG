import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import { Row, Title, Label, StyledContainer } from '../layouts/Auth';
import Link from '../layouts/Link';
import { AuthContext } from '../context/Auth';
import styled from 'styled-components';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserData(user);
        navigate('/game');
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          toast('Email inválido');
        } else if (error.code === 'auth/user-not-found') {
          toast('Nenhum usuario possui esse email');
        } else if (error.code === 'auth/wrong-password') {
          toast('Senha inválida');
        } else {
          toast('Não foi possivel realizar o seu login, tente novamente');
        }
      });
  } 

  async function signInWithGoogle(event) {
    event.preventDefault();
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserData(user);
        navigate('/game');
      }).catch((error) => {
        toast('Não foi possivel realizar o seu login, tente novamente');
      });
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
            <Button type='submit' color='primary' fullWidth>Entrar</Button>
            <Button type='button' color='primary' fullWidth onClick={signInWithGoogle}><FaGoogle size={40}/></Button>
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
