import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputField, InputWrapper } from './styles';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  marginBottom?: number;
  inputLeftElement: React.ReactNode;
}

export function Input({ marginBottom = 0, inputLeftElement, ...rest }: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <InputWrapper
        isFocused={isFocused}
        marginBottom={marginBottom}
      >
        {inputLeftElement && inputLeftElement}
        <InputField
          placeholderTextColor={theme.colors.gray[300]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </InputWrapper>
    </Container>
  );
}