import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

interface InputWrapperProps {
  isFocused: boolean;
  marginBottom: number;
}

export const Container = styled.View`
  width: 100%;
  align-self: center;
`;

export const InputWrapper = styled.View<InputWrapperProps>`
  flex-direction: row;
  align-items: center;
  width: 95%;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: ${({marginBottom}) => marginBottom}px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  ${({ isFocused, theme }) => isFocused && css`
    border-width: 1px;
    border-color: ${theme.colors.green[500]};
  `};
`;

export const InputField = styled(TextInput)`
  width: 100%;
  padding: 0 10px;
  color: ${({theme}) => theme.colors.gray[300]};
`;
