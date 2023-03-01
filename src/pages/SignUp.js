import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import { Row, Title, Label, StyledContainer } from '../layouts/Auth';
import Link from '../layouts/Link';
import { AuthContext } from '../context/Auth';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserData(user);
        navigate('/game');
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          toast('Email inválido');
        } else if (error.code === 'auth/weak-password') {
          toast('Senha fraca, use 6 ou mais caracteres');
        } else if (error.code === 'auth/email-already-in-use') {
          toast('O email ja está em uso');
        } else {
          toast('Não foi possivel realizar o seu registro, tente novamente');
        }
      });
  }

  async function signUpWithGoogle(event) {
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
  };

  return (
    <Wrapper>
      <StyledContainer>
        <Row>
          <Title>MMOnster RPG</Title>
        </Row>
        <Row>
          <Label>Registrar</Label>
          <form onSubmit={submit}>
            <Input label='E-mail' type='text' fullWidth value={email} onChange={e => setEmail(e.target.value)} />
            <Input label='Senha' type='password' fullWidth value={password} onChange={e => setPassword(e.target.value)} />
            <Button type='submit' color='primary' fullWidth>Registrar</Button>
            <Button type='button' color='primary' fullWidth onClick={signUpWithGoogle}><FaGoogle size={40}/></Button>
          </form>
        </Row>
        <Row>
          <Link to='/sign-in'>Já possui uma conta? Faça login</Link>
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

