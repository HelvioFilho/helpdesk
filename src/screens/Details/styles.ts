import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

interface TitleProps {
  color: string;
}

interface InputMultilineProps {
  isFocused: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Box = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[600]};
  padding: ${RFPercentage(3)}px ${RFPercentage(3)}px 0px ${RFPercentage(3)}px;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  padding: ${RFPercentage(2)}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<TitleProps>`
  font-size: ${RFValue(13)}px;
  text-transform: uppercase;
  margin-left: ${RFPercentage(1)}px;
  color: ${({ color }) => color};
`;

export const InputMultiline = styled(TextInput) <InputMultilineProps>`
  flex: 1;
  width: 100%;
  height: ${RFPercentage(18)}px;
  border-radius: 5px;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  ${({ isFocused, theme }) => isFocused && css`
    border-width: 1px;
    border-color: ${theme.colors.green[500]};
  `};
  margin-bottom: ${RFPercentage(1)}px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const WrapperButton = styled.View`
  padding: ${RFPercentage(4)}px ${RFPercentage(2)}px ${RFPercentage(2)}px ${RFPercentage(2)}px;  
`;