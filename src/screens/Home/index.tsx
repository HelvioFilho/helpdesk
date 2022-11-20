import React, { useEffect, useState } from 'react';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import { Alert, FlatList } from 'react-native';
import { useTheme } from 'styled-components';

import Logo from '../../assets/logo_mini.svg';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
  BodyContainer,
  ButtonWrapper,
  Container,
  EmptyText,
  EmptyWrapper,
  HeaderContainer,
  Logout,
  Number,
  Title,
  TopWrapper
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import { Loading } from '../../components/Loading';
import { Order } from '../../components/Order';
import { appStore } from '../../services/Store';
import { dateFormat } from '../../services/Utils/firestoreDateFormat';

export interface OrderProps {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed';
}

type WhereFilterOp =
  | '<'
  | '<='
  | '=='
  | '>'
  | '>='
  | '!='
  | 'array-contains'
  | 'array-contains-any'
  | 'in'
  | 'not-in';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([]);

  const { colors } = useTheme();
  const { data } = appStore();
  const { navigate } = useNavigation()

  function handleLogout() {
    auth()
      .signOut()
      .catch(error => {
        console.log(error);
        return Alert.alert('Aviso', 'Não foi possível sair.');
      });
  }

  function handleOpenDetails(orderId: string) {
    navigate('details', { orderId });
  }

  function handleNewOrder() {
    navigate('register');
  }

  useEffect(() => {
    if (!!data) {
      setIsLoading(true);
      let doc = 'customer';
      let key = data.email;
      if (data.type === 'technician') {
        doc = 'status';
        key = statusSelected;
      }

      const subscriber = firestore()
        .collection('orders')
        .where('status', '==', statusSelected)
        .where(doc, '==', key)
        .onSnapshot(snapshot => {
          let dataOrder = [] as OrderProps[];
          if (snapshot) {
            dataOrder = snapshot.docs.map(doc => {
              const { patrimony, status, created_at } = doc.data();

              return {
                id: doc.id,
                patrimony,
                status,
                when: dateFormat(created_at),
              }
            });
          }

          setOrders(dataOrder);
          setIsLoading(false);
        });

      return subscriber;
    }
  }, [statusSelected, data]);

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
          <Number>{orders.length}</Number>
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
        {
          isLoading ?
            <Loading /> :
            <FlatList
              data={orders}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) =>
                <Order
                  data={item}
                  onPress={() => handleOpenDetails(item.id)}
                />
              }
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
              ListEmptyComponent={() => (
                <EmptyWrapper>
                  <ChatTeardropText
                    color={colors.gray[300]}
                    size={40}
                  />
                  <EmptyText>
                    Você ainda não possui {'\n'}
                    solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
                  </EmptyText>
                </EmptyWrapper>
              )}
            />
        }
        {
          data.type === 'customer' &&
          <Button
            title="Nova Solicitação"
            onPress={handleNewOrder}
            style={{ alignSelf: "center" }}
          />
        }
      </BodyContainer>
    </Container>
  );
}