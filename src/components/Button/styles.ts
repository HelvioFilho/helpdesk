import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 105%;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.green[700]};
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  margin: 18px;
  color: ${({theme}) => theme.colors.white};
`;