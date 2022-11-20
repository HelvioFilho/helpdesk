import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[600]};
  padding: ${RFPercentage(2.5)}px;
  margin-top: ${RFPercentage(2.5)}px;
  border-radius: 5px;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFPercentage(2)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.gray[300]};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
  margin-left: ${RFPercentage(1)}px;
`;

export const TextDescription = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const WrapperFooter = styled.View`
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.gray[400]};
  margin-top: ${RFPercentage(1.5)}px;
`;

export const TextFooter = styled.Text`
  color: ${({theme }) => theme.colors.gray[300]};
  margin-top: ${RFPercentage(1.5)}px;
  font-size: ${RFValue(10)}px;
`;