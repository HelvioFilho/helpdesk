import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  padding-left: ${RFPercentage(2)}px;
  padding-right: ${RFPercentage(2)}px;
  padding-top: ${RFPercentage(10)}px;
  padding-bottom: ${RFPercentage(5)}px;
`;

export const Logout = styled(TouchableOpacity)`

`;

export const BodyContainer = styled.View`
  flex: 1;
  padding: ${RFPercentage(2)}px ${RFPercentage(2)}px;
`;

export const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFPercentage(3)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Number = styled.Text`
  color: ${({theme}) => theme.colors.gray[200]};
`;

export const ButtonWrapper = styled.View`
  padding: 20px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EmptyWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(2)}px;
`;

export const EmptyText = styled.Text`
  color: ${({theme}) => theme.colors.gray[300]};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFPercentage(2)}px;
  line-height: ${RFPercentage(4)}px;
  text-align: center;
`;