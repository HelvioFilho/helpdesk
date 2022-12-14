import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

interface BoxProps {
  color: string;
}

export const Container = styled(TouchableOpacity)``;

export const Wrapper = styled.View`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  overflow: hidden;
`;

export const Pill = styled.View<BoxProps>`
  position: absolute;
  top: 0px;
  right: ${RFPercentage(13)}px;
  padding: 3px 10px;
  border-radius: 15px;
  background-color: ${({ color }) => color};
`;

export const TextPill = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.View<BoxProps>`
  height: 100%;
  width: ${RFPercentage(1)}px;
  background-color: ${({ color }) => color};
`;

export const WrapperContent = styled.View`
  flex: 1;
  margin: ${RFPercentage(3)}px 0px ${RFPercentage(3)}px ${RFPercentage(2.5)}px;
`;

export const Patrimony = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(13)}px;
`;

export const WrapperClock = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;

export const Data = styled.Text`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: ${RFValue(10)}px;
  margin-left: 4px;
`;

export const Circle = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[500]};
  margin-right: ${RFPercentage(3)}px;
  width: ${RFPercentage(6)}px;
  height: ${RFPercentage(6)}px;
  border-radius: ${RFPercentage(3)}px;
  align-items: center;
  justify-content: center
`;