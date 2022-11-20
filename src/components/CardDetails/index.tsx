import React, { ReactNode } from 'react';
import { IconProps } from 'phosphor-react-native';

import { Container, TextDescription, TextFooter, Title, WrapperFooter, WrapperTitle } from './styles';
import { useTheme } from 'styled-components';

interface CardDetailsProps {
  title: string;
  description?: string;
  footer?: string;
  icon: React.ElementType<IconProps>;
  children?: ReactNode
}

export function CardDetails({
  title,
  description,
  footer = null,
  icon: Icon,
  children
}: CardDetailsProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <WrapperTitle>
        <Icon color={colors.primary[700]} />
        <Title>
          {title}
        </Title>
      </WrapperTitle>
      {
        !!description &&
        <TextDescription>
          {description}
        </TextDescription>
      }
      {children}
      {
        !!footer &&
        <WrapperFooter>
          <TextFooter>
            {footer}
          </TextFooter>
        </WrapperFooter>
      }
    </Container>
  );
}