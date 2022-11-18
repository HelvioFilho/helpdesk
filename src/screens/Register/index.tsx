import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, InputMultiline } from './styles';
import { appStore } from '../../services/Store';

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const { goBack } = useNavigation();
  const { colors } = useTheme();
  const { data } = appStore();

  function handleNewOrderRegister() {
    if (!patrimony || !description) {
      return Alert.alert('Aviso', 'Preencha todos os campos.');
    }

    setIsLoading(true);

    firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        customer: data.email,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert('Aviso', 'Solicitação registrada com sucesso!');
        goBack();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Aviso', 'Não foi possível registrar o pedido');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <Header
        title="Solicitação"
        goBack={goBack}
      />
      <Input
        placeholder="Número do patrimônio"
        marginBottom={15}
        keyboardType="numeric"
        onChangeText={setPatrimony}
      />
      <InputMultiline
        placeholder="Descrição do Problema"
        isFocused={isFocused}
        multiline
        placeholderTextColor={colors.gray[300]}
        textAlignVertical="top"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setDescription}
      />
      <Button
        title="Cadastrar"
        isLoading={isLoading}
        onPress={handleNewOrderRegister}
      />
    </Container>
  );
}