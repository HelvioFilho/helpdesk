import { TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface InputMultilineProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: ${RFPercentage(3)}px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const InputMultiline = styled(TextInput) <InputMultilineProps>`
  flex: 1;
  width: 100%;
  border-radius: 5px;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  ${({ isFocused, theme }) => isFocused && css`
    border-width: 1px;
    border-color: ${theme.colors.green[500]};
  `};
  margin-bottom: ${RFPercentage(3)}px;
  color: ${({theme}) => theme.colors.gray[300]};
`;