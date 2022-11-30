import React, { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Envelope, Key } from 'phosphor-react-native';

import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import Logo from '../../assets/logo.svg'
import {
  Container,
  Heading,
  InputWrapper,
  TextHeading
} from './styles';

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Aviso', 'Verifique o e-mail ou senha!');
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        if (error.code === 'auth/invalid-email') {
          return Alert.alert('Aviso', 'E-mail inválido!');
        }
        if (error.code === 'auth/wrong-password' || error.code === 'user-not-found') {
          return Alert.alert('Aviso', 'E-mail ou senha inválidos');
        }
      })
  }

  return (
    <Container>
      <Logo />
      <Heading>
        <TextHeading>Acesse sua conta</TextHeading>
      </Heading>
      <InputWrapper>
        <Input
          placeholder="E-mail"
          marginBottom={14}
          autoCapitalize="none"
          onChangeText={setEmail}
          inputLeftElement={
            <Envelope
              color={theme.colors.gray[300]}
            />
          }
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          onChangeText={setPassword}
          inputLeftElement={
            <Key
              color={theme.colors.gray[300]}
            />
          }
        />
      </InputWrapper>
      <Button
        title="Entrar"
        isLoading={isLoading}
        onPress={handleSignIn}
      />
    </Container>
  );
}