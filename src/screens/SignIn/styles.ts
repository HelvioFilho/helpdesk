import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.gray[600]};
  padding-left: 8px;
  padding-right: 8px;
  padding-top: ${RFPercentage(14)}px;
`;

export const Heading = styled.View`
  margin-top: ${RFPercentage(10)}px;
  margin-bottom: 6px;
`;

export const TextHeading = styled.Text`
  color: ${({theme}) => theme.colors.gray[100]};
  font-size: ${RFValue(16)}px;
`;

export const InputWrapper = styled.View`
  margin-top: 20px;
  margin-bottom: 30px;
`;