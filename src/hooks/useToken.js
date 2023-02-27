import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

export default function useToken() {
  const { userData: user } = useContext(AuthContext);

  return user.accessToken;
}
