import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 105%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green[700]};
  ${Platform.OS === 'ios' && css`
    margin-bottom: 10px;
  `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  margin: 18px;
  color: ${({ theme }) => theme.colors.white};
`;