import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  padding-top: ${RFPercentage(6)}px;
  padding-bottom: ${RFPercentage(3)}px;
`;

export const Icon = styled(TouchableOpacity)`
  position: relative;
  z-index: 999;
  padding: 10px;
`;

export const Heading = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.gray[100]};
  text-align: center;
  font-size: ${RFValue(18)}px;
  margin-left: ${RFPercentage(-5)}px;
`;