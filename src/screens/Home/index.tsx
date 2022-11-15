import { SignOut } from 'phosphor-react-native';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Logo from '../../assets/logo_mini.svg';
import auth from '@react-native-firebase/auth';
import {
  BodyContainer,
  ButtonWrapper,
  Container,
  HeaderContainer,
  Logout,
  Number,
  Title,
  TopWrapper
} from './styles';
import { Alert } from 'react-native';
import { Filter } from '../../components/Filter';


export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');

  const { colors } = useTheme();

  function handleLogout() {
    auth()
      .signOut()
      .catch(error => {
        console.log(error);
        return Alert.alert('Aviso', 'Não foi possível sair.');
      })
  }

  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <Logout
          activeOpacity={0.8}
          onPress={handleLogout}
        >
          <SignOut
            size={26}
            color={colors.gray[300]}
          />
        </Logout>
      </HeaderContainer>
      <BodyContainer>
        <TopWrapper>
          <Title>
            Solicitações
          </Title>
          <Number>
            1
          </Number>
        </TopWrapper>
        <ButtonWrapper>
          <Filter
            type="open"
            title="em andamento"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type="closed"
            title="finalizados"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </ButtonWrapper>
      </BodyContainer>
    </Container>
  );
}