import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { Header } from '../../components/Header';
import { OrderProps } from '../Home';

import { Box, Container, InputMultiline, Title, WrapperButton, WrapperTitle } from './styles';
import { dateFormat } from '../../services/Utils/firestoreDateFormat';
import { Loading } from '../../components/Loading';
import { CircleWavyCheck, ClipboardText, DesktopTower, Hourglass } from 'phosphor-react-native';
import { Alert, ScrollView } from 'react-native';
import { CardDetails } from '../../components/CardDetails';
import { Button } from '../../components/Button';
import { appStore } from '../../services/Store';

interface RouteParams {
  orderId: string;
}

interface OrderDetails extends OrderProps {
  description: string;
  solution: string;
  closed: string;
}

interface OrderFirestoreProps {
  patrimony: string;
  description: string;
  status: 'open' | 'closed';
  new_order: number;
  solution?: string;
  created_at: FirebaseFirestoreTypes.Timestamp;
  closed_at?: FirebaseFirestoreTypes.Timestamp
}

export function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const [solution, setSolution] = useState('');
  const [order, setOrder] = useState<OrderDetails>({} as OrderDetails);
  const [isFocused, setIsFocused] = useState(false);

  const { colors } = useTheme();
  const { params } = useRoute();
  const { orderId } = params as RouteParams;
  const { data } = appStore();
  const { goBack } = useNavigation();

  function handleOrderClose() {
    if (!solution) {
      return Alert.alert('Aviso', 'Informe a solução para encerrar a solicitação');
    }

    firestore()
      .collection<OrderFirestoreProps>('orders')
      .doc(orderId)
      .update({
        status: 'closed',
        solution,
        closed_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert('Aviso', 'Solicitação encerrada com sucesso!');
        goBack();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Aviso', 'Não foi possível encerrar a solicitação');
      })
  }

  function VerifyNewOrder() {
    if (order.new_order === 1) {
      let isVerify = false;
      if (order.status === 'open' && data.type === 'technician') {
        isVerify = true;
      } else if (order.status !== 'open' && data.type === 'customer') {
        isVerify = true;
      }

      if (isVerify) {
        firestore()
          .collection<OrderFirestoreProps>('orders')
          .doc(orderId)
          .update({
            new_order: 0
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  useEffect(() => {
    firestore()
      .collection<OrderFirestoreProps>('orders')
      .doc(orderId)
      .get()
      .then((doc) => {
        const {
          patrimony,
          description,
          status,
          created_at,
          closed_at,
          new_order,
          solution
        } = doc.data();

        const closed = closed_at ? dateFormat(closed_at) : null;

        setOrder({
          id: doc.id,
          patrimony,
          description,
          status,
          solution,
          new_order,
          when: dateFormat(created_at),
          closed
        });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    VerifyNewOrder();
  }, [order]);

  return (
    <Container>
      <Box>
        <Header
          title="Solicitação"
          goBack={goBack}
        />
      </Box>
      {
        isLoading ?
          <Loading /> :
          <>
            <WrapperTitle>
              {
                order.status === 'closed' ?
                  <CircleWavyCheck size={24} color={colors.green[300]} /> :
                  <Hourglass size={24} color={colors.secondary[700]} />
              }
              <Title
                color={order.closed === 'closed' ? colors.green[300] : colors.secondary[700]}
              >
                {order.status === 'closed' ? 'finalizado' : 'em andamento'}
              </Title>
            </WrapperTitle>
            <ScrollView>
              <CardDetails
                title="equipamento"
                description={`Patrimônio ${order.patrimony}`}
                icon={DesktopTower}
              />
              <CardDetails
                title="descrição do problema"
                description={order.description}
                icon={ClipboardText}
                footer={`Registrado em ${order.when}`}
              />
              <CardDetails
                title="solução"
                description={
                  !!order.solution ?
                    order.solution :
                    data.type === 'customer' ?
                      'Aguardando solução!' : ''}
                icon={CircleWavyCheck}
                footer={order.closed && `Encerrado em ${order.closed}`}
              >
                {
                  (order.status === 'open') && (data.type === 'technician') &&
                  <InputMultiline
                    placeholder="Descrição da solução"
                    isFocused={isFocused}
                    multiline
                    placeholderTextColor={colors.gray[300]}
                    textAlignVertical="top"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={setSolution}
                  />
                }
              </CardDetails>
            </ScrollView>
            {
              (order.status === 'open') && (data.type === 'technician') &&
              <WrapperButton>
                <Button
                  title="Encerrar Solicitação"
                  onPress={handleOrderClose}
                />
              </WrapperButton>
            }
          </>
      }
    </Container>
  );
}