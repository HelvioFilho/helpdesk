import React from 'react';
import { CaretLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

import { Container, Heading, Icon } from './styles';

interface HeaderProps {
  title: string;
  goBack: () => void;
}

export function Header({ title, goBack }: HeaderProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <Icon
        onPress={goBack}
      >
        <CaretLeft
          color={colors.gray[200]}
          size={24}
        />
      </Icon>
      <Heading>
        {title}
      </Heading>
    </Container>
  );
}