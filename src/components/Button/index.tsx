import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Loading } from '../Loading';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  const { colors } = useTheme();

  return (
    <Container
      activeOpacity={0.8}
      {...rest}
    >
      <Title>
        {
          isLoading ?
            <Loading
              color={colors.white}
            /> :
            title
        }
      </Title>
    </Container>
  );
}